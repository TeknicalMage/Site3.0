import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import Nav from './Nav';
import reportWebVitals from './reportWebVitals';
import Homeinfo from './Pages/Homepage'; 

ReactDOM.render(

  //<Nav />, document.getElementById('root')

  
  <Main />, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
