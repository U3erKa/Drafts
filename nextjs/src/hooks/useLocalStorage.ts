import { useSyncExternalStore } from 'react';

interface ListenersMap {
  [key: string]: (() => void)[];
}

const sessionStorageListeners: ListenersMap = {};
const localStorageListeners: ListenersMap = {};

function getServerSnapshot() {
  return null;
}

function onStoreChange(listeners: ListenersMap[string]) {
  for (const listener of listeners) {
    listener();
  }
}

export function useSessionStorage<T = unknown>(key: string) {
  return useBrowserStorage<T>(key, sessionStorage, sessionStorageListeners);
}

export function useLocalStorage<T = unknown>(key: string) {
  return useBrowserStorage<T>(key, localStorage, localStorageListeners);
}

function useBrowserStorage<T = unknown>(
  key: string,
  storage: typeof localStorage | typeof sessionStorage,
  listeners: ListenersMap,
) {
  const rawValue = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const value: T | undefined = rawValue !== null ? JSON.parse(rawValue) : undefined;

  function subscribe(listener: () => void) {
    listeners[key] = [...(listeners[key] ?? []), listener];
    return () => {
      listeners[key] = listeners[key].filter((l) => l !== listener);
    };
  }

  function getSnapshot() {
    return storage.getItem(key);
  }

  function setValue(value?: T | null) {
    const oldValue = storage.getItem(key);
    const newValue = value != null ? JSON.stringify(value) : null;
    if (newValue !== null) storage.setItem(key, newValue);
    else storage.removeItem(key);
    if (oldValue !== newValue) onStoreChange(listeners[key]);
  }

  return [value, setValue] as const;
}
