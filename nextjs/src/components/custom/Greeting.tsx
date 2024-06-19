'use client';
import { useRef } from 'react';
import { useLocalStorage } from '@/hooks/useBrowserStorage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';


export function Greeting() {
  const [greeting, setGreeting] = useLocalStorage<string>('greeting');
  return <p>{greeting}</p>;
}

export function SetGreeting() {
  const [greeting, setGreeting] = useLocalStorage<string>('greeting');
  const inputRef = useRef<HTMLInputElement>(null);

  function updateGreeting() {
    inputRef.current?.focus();
    if (!inputRef.current?.value) return;
    setGreeting(inputRef.current.value);
    inputRef.current.value = '';
  }

  function clearGreeting() {
    inputRef.current?.focus();
    setGreeting();
  }

  return (
    <>
      <div className="flex gap-4">
        <Button onClick={updateGreeting}>Update greeting</Button>
        <Button onClick={clearGreeting}>Clear greeting</Button>
      </div>
      <Input ref={inputRef} className="text-primary" />
    </>
  );
}
