import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './index.css';

const rootDiv = document.querySelector('#root');
const root = ReactDOM.createRoot(rootDiv);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
