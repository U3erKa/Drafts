import { runInAction } from 'mobx';
import { observer } from 'mobx-react-lite';
import { type Todo } from 'mobxStore';
import { RenderCounter } from 'components/mobx/RenderCounter';

type TodoViewProps = {
  todo: Todo;
};

export const TodoView = observer(function TodoView({ todo }: TodoViewProps) {
  const onToggleCompleted = () => {
    runInAction(() => {
      todo.completed = !todo.completed;
    });
  };

  const onRename = () => {
    runInAction(() => {
      todo.task = prompt('Task name', todo.task) || todo.task;
    });
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
      <RenderCounter />
    </li>
  );
});
