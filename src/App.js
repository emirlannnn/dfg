import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from './Main/Main';
import Login from './Auth/Login';
import Regist from './Auth/Regist';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regist" element={<Regist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
