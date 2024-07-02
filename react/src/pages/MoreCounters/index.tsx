import { FC } from 'react';
import Form from 'components/Form';
import Portal from 'components/Portal';
import ContextClass from 'components/ContextClass';
import { Counter } from 'features/counter/Counter';
import './MoreCounters.css';

const App: FC = function (): JSX.Element {
  return (
    <>
      <Counter />
      <Portal>
        <Form />
      </Portal>
      <ContextClass />
    </>
  );
};

export default App;
