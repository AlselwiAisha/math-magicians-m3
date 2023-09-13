import React from 'react';
import PropTypes from 'prop-types';

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

Btn.propTypes = {
  value: PropTypes.string.isRequired,
};
export default Btn;
