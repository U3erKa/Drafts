import Link from 'next/link';
import type React from 'react';
import { Button } from '@/components/ui/button';
import { SkeletonDemo } from '@/components/custom/SkeletonDemo';
import { HookForm } from '@/components/custom/HookForm';
import {
  ServerActionForm,
  type ServerActionFormProps,
} from '@/components/custom/ServerActionForm';
import { RegistrationForm } from '@/components/custom/RegistrationForm';
import { ArbitraryActionButton } from '@/components/custom/ArbitraryActionButton';
import { onDataAction, onFormAction } from '@/serverActions';

export default function Home() {
  const serverAction: ServerActionFormProps['serverAction'] = async (
    formData,
  ) => {
    'use server';
    console.log(Object.fromEntries(formData));
  };

  const arbitraryAction = async <T extends { [key: PropertyKey]: any }>(
    state: T,
    data: T,
  ) => {
    'use server';
    console.log(state, data);
    return data;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-800">
      <div>
        <h2 className="text-secondary">Hook form</h2>
        <HookForm />
      </div>
      <div>
        <h2 className="text-secondary">Server action form</h2>
        <ServerActionForm serverAction={serverAction} />
      </div>
      <div className="mx-auto max-w-xl">
        <h2 className="text-secondary">Hybrid form</h2>
        <RegistrationForm
          onDataAction={onDataAction}
          onFormAction={onFormAction}
        />
      </div>
      <ArbitraryActionButton arbitraryAction={arbitraryAction}>
        Arbitrary server action
      </ArbitraryActionButton>
      <Button variant={'default'} asChild size={'default'}>
        <Link href="/login">Login</Link>
      </Button>
      <SkeletonDemo />
    </main>
  )
}
