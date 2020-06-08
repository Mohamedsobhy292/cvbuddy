import React from 'react';
import ChooseTemplate from './pages/choose-template';
import Form from './pages/form'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ChooseTemplate />} />
      <Route path="form/*" element={<Form />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
