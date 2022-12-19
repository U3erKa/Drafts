import { Route, Routes } from 'react-router-dom';
import { Users, Counter, Home, NotFound, Register } from 'pages';
import { Header } from 'components';

export default function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/users" element={<Users />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}
