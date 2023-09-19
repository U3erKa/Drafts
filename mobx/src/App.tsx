import { action, autorun, computed, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import './App.css';

type Todo = {
  task: string;
  completed: boolean;
  assignee: { name: string } | null;
};

class ObservableTodoStore {
  todos: Todo[] = [];
  pendingRequests = 0;

  constructor() {
    // describes the shape of `ObservableTodoStore` object
    makeObservable(this, {
      todos: observable,
      pendingRequests: observable,
      completedTodosCount: computed,
      report: computed,
      addTodo: action,
    });
    autorun(() => console.log(this.report));
  }

  get completedTodosCount() {
    return this.todos.filter((todo) => todo.completed === true).length;
  }

  get report() {
    if (this.todos.length === 0) return '<none>';
    const nextTodo = this.todos.find((todo) => todo.completed === false);
    return (
      `Next todo: "${nextTodo ? nextTodo.task : '<none>'}". ` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}`
    );
  }

  addTodo(task: Todo['task'] | null) {
    if (!task) {
      return;
    }
    this.todos.push({
      task: task,
      completed: false,
      assignee: null,
    });
  }
}

const store = new ObservableTodoStore();

console.log(store);

function messWithTodos() {
  store.todos.push({
    task: 'Find a fine cheese',
    completed: true,
    assignee: null,
  });
  store.todos.push({
    task: 'Find a finer cheese',
    completed: true,
    assignee: null,
  });
  store.todos[0].completed = !store.todos[0].completed;
  store.todos[1].task = 'Random todo ' + Math.random();
}

messWithTodos();
messWithTodos();
messWithTodos();

function RenderCounter() {
  return <div>{store.completedTodosCount}</div>;
}

// `observer` wrapper adds store to the component props
// kinda like mapStateToProps from redux
const TodoList = observer(({ store }: { store: ObservableTodoStore }) => {
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
      <small> (double-click a todo to edit)</small>
      <RenderCounter />
    </div>
  );
});

const TodoView = observer(({ todo }: { todo: Todo }) => {
  const onToggleCompleted = () => {
    todo.completed = !todo.completed;
  };

  const onRename = () => {
    todo.task = prompt('Task name', todo.task) || todo.task;
  };

  return (
    <li onDoubleClick={onRename}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggleCompleted}
      />
      {todo.task}
      {todo.assignee ? <small>{todo.assignee.name}</small> : null}
      {/* this counter goes all over the place, only when TodoView rerenders */}
      <RenderCounter />
    </li>
  );
});

function App() {
  return <TodoList store={store} />;
}

export default App;
