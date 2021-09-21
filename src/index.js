import React from "react";
import ReactDOM from "react-dom";
// import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";
import './index.css'


const dvRoot = document.querySelector('#root');
ReactDOM.render( <CounterApp value = {10} />, dvRoot);
//Renderizar elementos por el metodo render .render(que, donde);
// ReactDOM.render( <PrimeraApp saludo = 'Hola mundo desde React' /> , dvRoot);