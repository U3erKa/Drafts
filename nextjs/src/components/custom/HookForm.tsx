'use client';

import { useForm } from 'react-hook-form';
import { FormProvider, FormField, FormFieldProvider } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export function HookForm() {
  const methods = useForm({
    defaultValues: { firstName: '', lastName: '', age: 0 },
  });
  const [age, setAge] = useState(0);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(console.log)}>
        <FormField
          name="firstName"
          render={({ field }) => <Input {...field} />}
        />
        <FormFieldProvider name="lastName">
          <Input {...methods.register('lastName')} />
        </FormFieldProvider>
        <FormFieldProvider name="age">
          <Input
            value={age}
            {...methods.register('age', {
              valueAsNumber: true,
              value: age,
              onChange(e) {
                setAge(e.target.value);
              },
            })}
          />
        </FormFieldProvider>
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
}
