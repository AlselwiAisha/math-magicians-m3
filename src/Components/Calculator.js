import React from 'react';
import './Calculator.css';
import ClcScrn from './ClcScrn';
import Btn from './Btn';
/* eslint-disable react/no-array-index-key */

const Calculator = () => {
  const btnValues = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];
  return (
    <div className="clcBckgrnd">
      <ClcScrn value="0" />
      <div className="btnsPad">
        {btnValues.flat().map((row, indx) => (
          <Btn
            key={indx}
            value={row}
          />
        ))}
      </div>
    </div>
  );
};
export default Calculator;
