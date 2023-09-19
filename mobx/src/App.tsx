import { store } from 'store';
import { TodoList } from 'components';
import 'sideEffects';
import './App.css';

function App() {
  return <TodoList store={store} />;
}

export default App;
