import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Count } from './components/Count';
import Testone from './components/Testone';
import Testtwo from './components/Testtwo';
import Testfour from './components/Testfour';


function App() {
  return (
    <div className="App">
        <Count></Count>
        <Testone></Testone>
        <Testtwo></Testtwo>
        <Testfour></Testfour>
    </div>
  );
}

export default App;
