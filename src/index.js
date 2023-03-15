import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './MyComponents/Header'
import Footer from './MyComponents/Footer';
import UserProfile from './MyComponents/UserProfile';

ReactDOM.render(
  <React.StrictMode>
    <Header />
     <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
