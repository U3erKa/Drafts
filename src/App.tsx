import { FC } from 'react';
import  Form  from './components/Form';
import  Counter  from './components/Counter';
import { Title } from './components/Title';
import './App.css';

const App: FC = function (): JSX.Element {
  return (
    <Title title="title">
      <Counter />
      <Form />
    </Title>
  );
};

export default App;
