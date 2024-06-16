import { useSyncExternalStore } from 'react';

const listeners: { [key: string]: (() => void)[] } = {};

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
  const value: T | undefined = rawValue !== null ? JSON.parse(rawValue) : undefined;

  function subscribe(listener: () => void) {
    listeners[key] = [...(listeners[key] ?? []), listener];
    return () => {
      listeners[key] = listeners[key].filter((l) => l !== listener);
    };
  }

  function getSnapshot() {
    return localStorage.getItem(key);
  }

  function setValue(value?: T | null) {
    const oldValue = localStorage.getItem(key);
    const newValue = value != null ? JSON.stringify(value) : null;
    if (newValue !== null) localStorage.setItem(key, newValue);
    else localStorage.removeItem(key);
    if (oldValue !== newValue) onStoreChange(key);
  }

  return [value, setValue] as const;
}
