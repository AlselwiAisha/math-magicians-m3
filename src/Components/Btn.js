import React from 'react';

/* eslint-disable react/prop-types */
const getClassName = (valu) => {
  const classNames = {
    AC: 'btn1',
    '+/-': 'btn1',
    '%': 'btn1',
    '÷': 'btn2',
    x: 'btn2',
    '-': 'btn2',
    '+': 'btn2',
    '=': 'btn2',
    0: 'zero',
    '.': 'btn1',
  }; return classNames[valu] || 'num';
};
const Btn = ({ value }) => {
  const val = `${value}`;

  return (
    (
      <button type="button" className={`${getClassName(val)} btn`}>
        {val}
      </button>
    )
  );
};

export default Btn;
