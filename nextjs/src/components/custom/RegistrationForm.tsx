'use client';
import { useFormState } from 'react-dom';
import { useRef } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  FormProvider,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormFieldProvider,
} from '@/components/ui/form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { registrationSchema } from '@/utils';

export type RegistrationData = {
  message: string;
  user?: z.infer<typeof registrationSchema>;
  issues?: z.ZodIssue[];
};

export type RegistrationFormProps = {
  onDataAction: (
    data: z.infer<typeof registrationSchema>,
  ) => Promise<RegistrationData>;
  onFormAction: (
    prevState: RegistrationData,
    data: FormData,
  ) => Promise<RegistrationData>;
};

export const RegistrationForm = ({
  onDataAction,
  onFormAction,
}: RegistrationFormProps) => {
  const [state, formAction] = useFormState(onFormAction, {
    message: '',
  });
  const form = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      first: '',
      last: '',
      email: '',
      zipcode: '',
      ...state.user,
    },
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const formRef = useRef<HTMLFormElement>(null);

  function getError(name: string) {
    return state?.issues?.find(({ path }) => path.join('.') === name)?.message;
  }

  const onSubmit = async (data: z.infer<typeof registrationSchema>) => {
    console.log(data);
    const formData = new FormData();
    formData.append('first', data.first);
    formData.append('last', data.last);
    formData.append('email', data.email);
    console.log(await onDataAction(data));
    return;

    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      // body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <FormProvider {...form}>
      <div>{state?.message}</div>
      <form
        ref={formRef}
        action={formAction}
        onSubmit={(e) => {
          if (form.formState.isValid) {
            form.clearErrors();
          } else {
            e.preventDefault();
            form.trigger();
          }
        }}
        // onSubmit={form.handleSubmit(onSubmit)}
        // onSubmit={form.handleSubmit(() => formRef.current?.requestSubmit())}
        className="space-y-8 bg-secondary p-4 rounded-lg"
      >
        <div className="flex gap-2">
          <FormFieldProvider name="first">
            <FormItem className="w-full">
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="" {...form.register('first')} />
              </FormControl>
              <FormDescription>Your first name.</FormDescription>
              <FormMessage>{getError('first')}</FormMessage>
            </FormItem>
          </FormFieldProvider>
          <FormFieldProvider name="last">
            <FormItem className="w-full">
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="" {...form.register('last')} />
              </FormControl>
              <FormDescription>Your last name.</FormDescription>
              <FormMessage>{getError('last')}</FormMessage>
            </FormItem>
          </FormFieldProvider>
        </div>
        <FormField
          control={form.control}
          name="zipcode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Zipcode</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>Your zipcode (9NNNN).</FormDescription>
              <FormMessage>{getError('zipcode')}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>Your email address.</FormDescription>
              <FormMessage>{getError('email')}</FormMessage>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};
