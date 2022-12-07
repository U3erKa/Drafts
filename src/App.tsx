import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { App as AppPage, Home, NotFound } from 'pages';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<AppPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
