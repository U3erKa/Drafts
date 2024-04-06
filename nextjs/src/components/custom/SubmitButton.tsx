'use client';
import { forwardRef } from 'react';
import { useFormStatus } from 'react-dom';
import { Button, type ButtonProps } from '@/components/ui/button';

export const SubmitButton = forwardRef<HTMLButtonElement, ButtonProps>(function SubmitButton(
  { disabled, ...props },
  ref,
) {
  const { pending, data, method, action } = useFormStatus();
  return (
    <Button ref={ref} type="submit" disabled={pending || disabled} {...props}>
      {pending ? 'Submitting...' : 'Submit'}
    </Button>
  );
});
