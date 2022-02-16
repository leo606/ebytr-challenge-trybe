import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Tasks from './pages/Tasks';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/tasks" element={<Tasks />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
