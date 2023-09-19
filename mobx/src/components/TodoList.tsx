import { observer } from 'mobx-react-lite';
import { peopleStore, type ObservableTodoStore } from 'store';
import { TodoView, RenderCounter } from '.';

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
      {/* @ts-expect-error `marquee` tag */}
      {store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null}
      <button onClick={onNewTodo}>New Todo</button>
      <input
        value={peopleStore[1].name}
        onChange={(event) => (peopleStore[1].name = event.target.value)}
      />
      <small> (double-click a todo to edit)</small>
      <RenderCounter />
    </div>
  );
});
