import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Counter, Home, NotFound } from 'pages';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
