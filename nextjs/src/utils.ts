import type { promisify as promisifyUtil } from 'util';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';
import { validateZipcode } from '@/serverActions';

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

export const registrationSchema = z.object({
  first: z.string().trim().min(1, {
    message: 'First name is required.',
  }),
  last: z.string().trim().min(1, {
    message: 'Last name is required.',
  }),
  email: z.string().trim().email({
    message: 'Invalid email address.',
  }),
  zipcode: z.string().trim().length(5).refine(validateZipcode, {
    message: 'Invalid zipcode.',
  }),
});
