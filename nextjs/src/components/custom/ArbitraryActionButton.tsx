'use client';
import { Button, type ButtonProps } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { defaultValues } from '@/constants';
import { forwardRef, useEffect, useState } from 'react';
import { useFormState } from 'react-dom';

type ArbitraryActionButtonProps = ButtonProps & {
  arbitraryAction: (
    state: typeof defaultValues,
    data: typeof defaultValues,
  ) => typeof defaultValues | Promise<typeof defaultValues>;
};

export const ArbitraryActionButton = forwardRef<HTMLButtonElement, ArbitraryActionButtonProps>(
  ({ arbitraryAction, onClick, ...props }, ref) => {
    const [state, action] = useFormState<typeof defaultValues, typeof defaultValues>(arbitraryAction, defaultValues);
    const [firstName, setFirstName] = useState('');

    useEffect(() => {
      console.log(state);
    }, [state]);

    return (
      <div>
        <Input name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <Button
          ref={ref}
          onClick={(e) => {
            onClick?.(e);
            action({ firstName });
          }}
          {...props}
        />
      </div>
    );
  },
);

ArbitraryActionButton.displayName = 'ArbitraryActionButton';
