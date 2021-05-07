import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cursor from './Cursor';
import Counter from './Counter';
import Sidebar from './Sidebar'
import reportWebVitals from './reportWebVitals';
import $ from 'jquery'
ReactDOM.render(
  <React.StrictMode>
   <Sidebar/>
    {/* <Cursor/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

$(`.column`).css("padding","0px");
$(`h1`).css("color","white");
$(`h2`).css("color","white");
$(`.thingNum`).css("color","white");


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
