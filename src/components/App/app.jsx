import './app.scss';
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Main } from '../Main/Main';
import { Constructor } from '../Constructor/Constructor';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path={'/constructor'} element={<Constructor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
