import type { promisify as promisifyUtil } from 'util';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';
import { validateZipcode } from '@/serverActions';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const promisify = function (func: (...args: any[]) => void) {
  return (...args: any[]) =>
    new Promise((resolve, reject) => {
      const callback = (err: unknown, result: any) => (err != null ? reject(err) : resolve(result));
      func(...args, callback);
    });
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
