'use client';
import type React from 'react';
import { Form, useForm } from 'react-hook-form';
import { FormProvider, FormFieldProvider, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { logValues } from '@/serverActions';

export function HookFormComponent() {
  const methods = useForm({
    progressive: true,
  });
  const { control, register } = methods;

  return (
    <FormProvider {...methods}>
      <Form
        control={control}
        // method="post"
        // action="/api/form"
        onSubmit={({ data, formData, formDataJson, event, method }) => {
          logValues(formData);
          console.log({ data, formData, formDataJson, event, method });
        }}
        onSuccess={({ response }) => console.log({ response })}
        onError={({ error, response }) => {
          console.log({ error, response });
        }}
        validateStatus={(status) => status === 200}
        // headers={{ 'Content-Type': 'application/json' }}
        // render={({ submit }) => {
        //   <View>
        //     {isSubmitSuccessful && <Text>Form submit successful.</Text>}
        //     {errors?.root?.server && <Text>Form submit failed.</Text>}
        //     <Button onPress={() => submit()} />
        //   </View>;
        // }}
      >
        <FormFieldProvider name="firstName">
          <Input {...register('firstName')} />
        </FormFieldProvider>
        <FormFieldProvider name="lastName">
          <Input {...register('lastName')} />
        </FormFieldProvider>
        <Button type="submit">Submit</Button>
      </Form>
    </FormProvider>
  );
}
