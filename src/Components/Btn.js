import React from 'react';
/* eslint-disable react/prop-types */

const getClassName = (valu) => {
  const classNames = {
    '÷': 'btn2',
    x: 'btn2',
    '-': 'btn2',
    '+': 'btn2',
    '=': 'btn2',
    0: 'zero',
  }; return classNames[valu] || 'num';
};
const Btn = ({ value, onClick }) => {
  const val = `${value}`;

  return (
    (
      <button type="button" className={`${getClassName(val)} btn`} onClick={onClick}>
        {val}
      </button>
    )
  );
};

export default Btn;
