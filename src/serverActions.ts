'use server';

import { registrationSchema } from '@/utils';
import { z } from 'zod';

export async function submitForm(_state: any, formData: FormData) {
  try {
    const data = Object.fromEntries(formData);
    console.log(data);
    return !!data.firstName;
  } catch (error: any) {
    console.log(error?.message);
    return false;
  }
}

export async function validateZipcode(zipcode: string): Promise<boolean> {
  console.log('validateZipcode on SERVER', zipcode);
  return /^\d{5}$/.test(zipcode) && zipcode.startsWith('9');
}

export const onDataAction = async (
  data: z.infer<typeof registrationSchema>,
) => {
  const parsed = registrationSchema.safeParse(data);

  if (parsed.success) {
    console.log('User registered');
    return { message: 'User registered', user: parsed.data };
  } else {
    return {
      message: 'Invalid data',
      issues: parsed.error.issues,
    };
  }
};

export const onFormAction = async (
  prevState: {
    message: string;
    user?: z.infer<typeof registrationSchema>;
    issues?: z.ZodIssue[];
  },
  formData: FormData,
) => {
  const data = Object.fromEntries(formData);
  const parsed = await registrationSchema.safeParseAsync(data);

  if (parsed.success) {
    console.log('User registered');
    return { message: 'User registered', user: parsed.data };
  } else {
    console.log('Invalid data');
    return { message: 'Invalid data', issues: parsed.error.issues };
  }
};
