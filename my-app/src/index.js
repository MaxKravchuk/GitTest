import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import CartPage from './components/CartPage';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path='cart' element={<CartPage/>}></Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);
