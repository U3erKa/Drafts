import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Counter, Home, NotFound } from 'pages';
import Header from 'components/Header/Header';

export default function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}
