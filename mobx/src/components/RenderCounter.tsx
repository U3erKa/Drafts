import { observer } from 'mobx-react-lite';
import { store } from 'store';

export const RenderCounter = observer(function RenderCounter() {
  return <div>{store.completedTodosCount}</div>;
});
