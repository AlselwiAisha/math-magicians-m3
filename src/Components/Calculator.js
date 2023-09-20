import React, { useState } from 'react';
import './Calculator.css';
import ClcScrn from './ClcScrn';
import Btn from './Btn';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState('');

  const onClick = (e) => {
    const btn = e.target.innerHTML;
    const results = calculate({ total, next, operation }, btn);
    setTotal(results.total || '');
    setNext(results.next || '');
    setOperation(results.operation || '');
  };
  const btnValues = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];
  const dis = "Let's do some math!";
  return (
    <div className="calcmain">
      <h2>{dis}</h2>
      <div className="calcborder">
        <div className="clcBckgrnd">
          <ClcScrn total={total} next={next} operation={operation} />
          <div key={(i) => i + 1} className="btnsPad">
            {btnValues.flat().map((row) => (
              <Btn
                key={row}
                value={row}
                onClick={onClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
