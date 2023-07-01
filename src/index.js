import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './pages/ProductPage/App.js';
import ProductListingPage from './pages/productListPage/productListPage.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductListingPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
