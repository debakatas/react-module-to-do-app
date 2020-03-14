/*
    This file is the entry for the
    Webpack system to bundle all
    into a nice app :)

*/

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'
import './style.css'

ReactDOM.render(
    <App/>,
    document.querySelector('#debakatas'));

console.log(React);
