'use client';
import { useFormState } from 'react-dom';
import { Button } from '@/components/ui/button';
import { submitForm } from '@/serverActions';
import { SubmitButton } from '@/components/custom/SubmitButton';
import { Input } from '@/components/ui/input';
import { defaultValues } from '@/constants';

export function ServerActionForm() {
  const [state, dispatch] = useFormState(
    (state: typeof defaultValues, payload: Partial<typeof defaultValues>) => {
      return { ...state, ...payload };
    },
    defaultValues,
  );
  const { firstName } = state;

  const formAction = async (formData: FormData) => {
    if (!formData.get('firstName')) return;
    const success = await submitForm(formData);
    if (success) dispatch(defaultValues);
  };

  const buttonAction = (formData: FormData): void =>
    console.log(Object.fromEntries(formData));

  return (
    <form action={formAction}>
      <Input
        name="firstName"
        value={firstName}
        onChange={(e) => dispatch({ firstName: e.target.value })}
      />
      <Button formAction={buttonAction}>Log values</Button>
      <SubmitButton />
    </form>
  );
}
