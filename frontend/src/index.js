import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App, Button } from 'common'
import reportWebVitals from './reportWebVitals';
import Hello from './Hello';

const text = 'Button componnent by Entry Point'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Button text={text}/>
    <Hello />
  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
