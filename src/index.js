import React from 'react';
import ReactDOM from 'reParsing error: [BABEL] F:\Code\React\first-react-app\src\index.js: Using `babel-preset-react-app` requires that yact-dom/client';
import './index.css';
import App from './components/app';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
