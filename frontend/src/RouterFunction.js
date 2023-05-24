import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Form from './components/Form/Form';
import Cards from './components/Cards/cards'
const RouterFunction = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/form" element={<Form/>} />
        <Route path='cards' element={<Cards/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default RouterFunction;
