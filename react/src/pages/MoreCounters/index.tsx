import { FC } from 'react';
import Portal from 'components/Portal';
import { Counter } from 'features/counter/Counter';
import './MoreCounters.css';

const App: FC = function (): JSX.Element {
  return (
    <Portal>
      <Counter />
    </Portal>
  );
};

export default App;
