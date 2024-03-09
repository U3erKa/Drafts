'use client';

import { useForm } from 'react-hook-form';
import { Form, FormField } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { defaultValues } from '@/constants';

export function HookForm() {
  const methods = useForm({ defaultValues });
  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(console.log)}>
        <FormField
          name="firstName"
          render={({ field }) => <Input {...field} />}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
