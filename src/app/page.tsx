import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SkeletonDemo } from '@/components/custom/SkeletonDemo';
import { HookForm } from '@/components/custom/HookForm';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-800">
      <HookForm />
      <Button variant={'default'} asChild size={'default'}>
        <Link href="/login">Login</Link>
      </Button>
      <SkeletonDemo />
    </main>
  )
}
