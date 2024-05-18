import { useSyncExternalStore } from 'react';

let listeners: { [key: string]: (() => void)[] } = {};

function getServerSnapshot() {
  return null;
}

function onStoreChange(key: string) {
  for (const listener of listeners[key]) {
    listener();
  }
}

export function useLocalStorage<T = unknown>(key: string) {
  const rawValue = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const value: T | null = rawValue === null ? rawValue : JSON.parse(rawValue);

  function subscribe(listener: () => void) {
    listeners = { ...listeners, [key]: [...(listeners[key] ?? []), listener] };
    return () => {
      listeners = { ...listeners, [key]: listeners[key].filter((l) => l !== listener) };
    };
  }

  function getSnapshot() {
    return localStorage.getItem(key);
  }

  function setValue(value?: T | null) {
    const oldValue = localStorage.getItem(key);
    const newValue = value != null ? JSON.stringify(value) : (value as null | undefined);
    if (newValue == null) localStorage.removeItem(key);
    else localStorage.setItem(key, newValue);
    if (oldValue !== newValue) onStoreChange(key);
  }

  return [value, setValue] as const;
}
