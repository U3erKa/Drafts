import { observer } from 'mobx-react-lite';
import { type Todo } from 'store';
import { RenderCounter } from '.';

type TodoViewProps = {
  todo: Todo;
};

export const TodoView = observer(function TodoView({ todo }: TodoViewProps) {
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