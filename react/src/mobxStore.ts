import { action, autorun, computed, makeAutoObservable, makeObservable, observable } from 'mobx';

export type Todo = {
  task: string;
  completed: boolean;
  assignee: { name: string } | null;
};

export const observableTodoStore = makeAutoObservable({
  todos: [] as Todo[],
  pendingRequests: 0,

  get completedTodosCount() {
    return this.todos.filter((todo: Todo) => todo.completed === true).length;
  },

  get report() {
    if (this.todos.length === 0) return '<none>';
    const nextTodo = this.todos.find((todo: Todo) => todo.completed === false);
    return `Next todo: "${nextTodo ? nextTodo.task : '<none>'}". Progress: ${this.completedTodosCount}/${this.todos.length}`;
  },

  addTodo(task: Todo['task'] | null) {
    if (!task) {
      return;
    }
    this.todos.push({
      task,
      completed: false,
      assignee: null,
    });
  },
});

/** @deprecated */
export class ObservableTodoStore {
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
    return `Next todo: "${nextTodo ? nextTodo.task : '<none>'}". Progress: ${this.completedTodosCount}/${this.todos.length}`;
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

// export const store = new ObservableTodoStore();
export const store = observableTodoStore;
export const peopleStore = observable([{ name: 'Michel' }, { name: 'Me' }]);
