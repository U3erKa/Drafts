import { store } from 'mobxStore';
import 'sideEffects';
import { TodoList } from 'components/mobx/TodoList';

function App() {
  return <TodoList store={store} />;
}

export default App;
