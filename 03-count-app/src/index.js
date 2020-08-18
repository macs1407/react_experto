import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';

import './index.css';
import CounterApp from './CounterApp';

const divRoot = document.querySelector("#root");

// Renederizar y mostrar lo que se la pasa
ReactDOM.render(<CounterApp numero={10}/>, divRoot);