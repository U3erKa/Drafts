'use no memo';
import { action, runInAction } from 'mobx';
import { store } from 'mobxStore';

export function messWithTodos() {
  runInAction(() => {
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
  });
}

export function addRandomTodo() {
  store.pendingRequests++;
  setTimeout(
    action(() => {
      store.addTodo('Random Todo ' + Math.random());
      store.pendingRequests--;
    }),
    2000,
  );
}
