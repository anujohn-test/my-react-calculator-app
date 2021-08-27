import React, { useState, useEffect } from 'react';
import Display from './components/Display';
import Keypads from './components/Keypads';
import './style.css';

export default function App() {
  const [result, setResult] = useState('');

  const clickHandler = label => {
    switch (label) {
      case 'CE':
      case 'C':
        setResult('');
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '-':
      case '+':
      case '*':
      case '/':
      case '(':
      case ')':
      case '.':
        try {
          setResult(result.concat(label));
        } catch (err) {
          setResult('Err');
        }
        break;
      case '=':
        try {
          setResult(eval(result));
        } catch (err) {
          setResult('Err');
        }
    }
  };

  return (
    <div>
      <div className="calculator-body">
        <h1>Simple Calculator</h1>
        <Display result={result} />
        <Keypads onClick={clickHandler} />
      </div>
    </div>
  );
}
