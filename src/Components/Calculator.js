import React from 'react';
import './Calculator.css';
import ClcScrn from './ClcScrn';
import Btn from './Btn';
/* eslint-disable react/no-array-index-key */
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.btnValues = [
      ['AC', '+/-', '%', '÷'],
      ['7', '8', '9', 'x'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '='],
    ];
  }

  render() {
    return (
      <div className="clcBckgrnd">
        <ClcScrn value="0" />
        <div className="btnsPad">
          {this.btnValues.flat().map((row, index) => (
            <Btn key={index} value={row} />
          ))}
        </div>
      </div>
    );
  }
}

export default Calculator;
