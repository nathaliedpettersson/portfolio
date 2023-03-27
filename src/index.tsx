import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './pages/Layout';
import Contact from './pages/Contact';
import CV from './pages/CV';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Layout />}>
<Route index element={<App />}></Route>
<Route path="/contact" element={<Contact />}></Route>
<Route path="/CV" element={<CV />}></Route>

  </Route>
 </Routes>
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
