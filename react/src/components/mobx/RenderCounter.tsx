'use no memo';
import { observer } from 'mobx-react-lite';
import { store } from 'mobxStore';

export const RenderCounter = observer(function RenderCounter() {
  return <div>{store.completedTodosCount}</div>;
});
