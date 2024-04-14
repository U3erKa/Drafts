'use client';
import { useRef } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function AddTodo() {
  const [todos, setTodos] = useLocalStorage<string[]>('todos');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Button
        onClick={() => {
          if (!inputRef.current?.value) return;
          setTodos([...(todos ?? []), inputRef.current.value]);
          inputRef.current.value = '';
        }}
      >
        Add todo
      </Button>
      <Button onClick={() => setTodos()}>Clear todos</Button>
      <Input ref={inputRef} className="text-primary" />
    </>
  );
}

export function TodoList() {
  const [todos, setTodos] = useLocalStorage<string[]>('todos');
  return <ul className="text-secondary">{todos?.map((todo, i) => <li key={i}>{todo}</li>)}</ul>;
}
