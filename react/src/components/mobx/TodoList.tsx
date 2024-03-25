import { observer } from 'mobx-react-lite';
import { peopleStore, type ObservableTodoStore } from 'mobxStore';
import { runInAction } from 'mobx';
import { TodoView } from 'components/mobx/TodoView';
import { RenderCounter } from 'components/mobx/RenderCounter';

type TodoListProps = {
  store: ObservableTodoStore;
};

// `observer` wrapper adds store to the component props
// kinda like mapStateToProps from redux
export const TodoList = observer(function TodoList({ store }: TodoListProps) {
  const onNewTodo = () => {
    store.addTodo(prompt('Enter a new todo:', 'coffee plz'));
  };

  return (
    <div>
      {store.report}
      <ul>
        {store.todos.map((todo, idx) => (
          <TodoView todo={todo} key={idx} />
        ))}
      </ul>
      {store.pendingRequests > 0 ? (
        <div className="marquee">Loading...</div>
      ) : null}
      <button onClick={onNewTodo}>New Todo</button>
      <input
        value={peopleStore[1].name}
        onChange={(event) =>
          runInAction(() => (peopleStore[1].name = event.target.value))
        }
      />
      <small> (double-click a todo to edit)</small>
      <RenderCounter />
    </div>
  );
});
