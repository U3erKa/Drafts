import { useSyncExternalStore } from 'react';

let listeners: (() => void)[] = [];

function subscribe(listener: () => void) {
  listeners = [...listeners, listener];
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function getServerSnapshot() {
  return null;
}

function onStoreChange() {
  for (const listener of listeners) {
    listener();
  }
}

export function useLocalStorage<T = unknown>(key: string) {
  const rawValue = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const value: T | null = rawValue === null ? rawValue : JSON.parse(rawValue);

  function getSnapshot() {
    return localStorage.getItem(key);
  }

  function setValue(value?: T | null) {
    const oldValue = localStorage.getItem(key);
    const newValue = value != null ? JSON.stringify(value) : (value as null | undefined);
    if (newValue == null) localStorage.removeItem(key);
    else localStorage.setItem(key, newValue);
    if (oldValue !== newValue) onStoreChange();
  }

  return [value, setValue] as const;
}
