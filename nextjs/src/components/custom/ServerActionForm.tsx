'use client';
import { useFormState } from 'react-dom';
import { Button } from '@/components/ui/button';
import { submitForm } from '@/serverActions';
import { SubmitButton } from '@/components/custom/SubmitButton';
import { Input } from '@/components/ui/input';

export type ServerActionFormProps = {
  serverAction: (formData: FormData) => void;
};

export function ServerActionForm({ serverAction }: ServerActionFormProps) {
  const [state, action] = useFormState(submitForm, undefined);

  const clientAction = (formData: FormData) =>
    console.log(Object.fromEntries(formData));

  return (
    <form action={action}>
      <Input name="firstName" />
      <Button formAction={clientAction}>Client action</Button>
      <Button formAction={serverAction}>Server action</Button>
      <SubmitButton className="min-w-[120px]" />
      <p className="text-secondary">
        {state === undefined
          ? 'No submits yet'
          : `Last submit ${state ? 'was successful' : 'has failed'}`}
      </p>
    </form>
  );
}
