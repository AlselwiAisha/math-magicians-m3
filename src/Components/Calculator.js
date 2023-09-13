import React, { useState } from 'react';
import './Calculator.css';
import ClcScrn from './ClcScrn';
import Btn from './Btn';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [result, setResult] = useState({});
  const { total, next, operation } = result;

  const onClick = (e) => {
    const btn = e.target.innerHTML;
    setResult(calculate(result, btn));
  };
  const btnValues = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <div className="clcBckgrnd">
      <ClcScrn value={total || next || operation || 0} />
      <div className="btnsPad">
        {btnValues.flat().map((row) => (
          <Btn
            key={row.id}
            value={row}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
};
export default Calculator;
