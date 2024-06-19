'use client';
import { useRef } from 'react';
import { useLocalStorage } from '@/hooks/useWebStorage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function AddTodo() {
  const [todos = [], setTodos] = useLocalStorage<string[]>('todos');
  const inputRef = useRef<HTMLInputElement>(null);

  function addTodo() {
    inputRef.current?.focus();
    if (!inputRef.current?.value) return;
    setTodos([...todos, inputRef.current.value]);
    inputRef.current.value = '';
  }

  function clearTodos() {
    inputRef.current?.focus();
    setTodos();
  }

  return (
    <>
      <div className="flex gap-4">
        <Button onClick={addTodo}>Add todo</Button>
        <Button onClick={clearTodos}>Clear todos</Button>
      </div>
      <Input ref={inputRef} className="text-primary" />
    </>
  );
}

export function TodoList() {
  const [todos, setTodos] = useLocalStorage<string[]>('todos');
  return <ul className="text-secondary">{todos?.map((todo, i) => <li key={i}>{todo}</li>)}</ul>;
}
