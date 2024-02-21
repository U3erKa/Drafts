import type { promisify as promisifyUtil } from 'util';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const promisify = function promisify(func: (...args: any[]) => void) {
  return function (...args: any) {
    return new Promise((resolve, reject) => {
      function callback(err: unknown, result: any) {
        err != null ? reject(err) : resolve(result);
      }
      // @ts-expect-error
      func.call(this, ...args, callback);
    });
  };
} as typeof promisifyUtil;
