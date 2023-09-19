import { store } from 'store';

export function RenderCounter() {
  return <div>{store.completedTodosCount}</div>;
}
