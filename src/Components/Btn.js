import React from 'react';
import PropTypes from 'prop-types';

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

Btn.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Btn;
