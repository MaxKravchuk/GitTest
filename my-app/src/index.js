import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import ProductsList from './components/ProductList';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path='/cart' element={ProductsList}></Route>
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);
