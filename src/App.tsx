import { FC } from 'react';
import Form from './components/Form';
import Form2 from './components/Form2';
import Counter from './components/Counter';
import Title from './components/Title';
import Portal from './components/Portal';
import ContextClass from './components/ContextClass';
import './App.css';

const App: FC = function (): JSX.Element {
  return (
    <Title title="title">
      <Counter />
      <Form />
      <Portal>
        <Form2 />
      </Portal>
      <ContextClass />
    </Title>
  );
};

export default App;
