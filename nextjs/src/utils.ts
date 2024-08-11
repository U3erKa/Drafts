import { validateZipcode } from '@/serverActions';
import { clsx, type ClassValue } from 'clsx';
import { type FormEvent } from 'react';
import { type FieldValues, type UseFormReturn } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import type { promisify as promisifyUtil } from 'util';
import { z } from 'zod';

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

export function submitAction<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues extends FieldValues | undefined = undefined,
>(form: Pick<UseFormReturn<TFieldValues, TContext, TTransformedValues>, 'formState' | 'clearErrors' | 'trigger'>) {
  return async function onSubmit(event: FormEvent<HTMLFormElement>) {
    if (form.formState.isValid) {
      form.clearErrors();
    } else {
      event.preventDefault();
      await form.trigger();
    }
  };
}
