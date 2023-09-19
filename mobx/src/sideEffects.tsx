import { messWithTodos, addRandomTodo } from 'functions';
import { store, peopleStore } from 'store';

console.log(store);

messWithTodos();
messWithTodos();
messWithTodos();
addRandomTodo();
addRandomTodo();
addRandomTodo();

store.todos[0].assignee = peopleStore[0];
store.todos[1].assignee = peopleStore[1];
peopleStore[0].name = 'Michel Weststrate';
