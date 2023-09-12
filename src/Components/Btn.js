import React from 'react';
import PropTypes from 'prop-types';

class Btn extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  static getClassName(value) {
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
    };
    return classNames[value] || 'num';
  }

  render() {
    const { value } = this.state;
    return (
      <button type="button" className={`${Btn.getClassName(value)} btn`}>
        {value}
      </button>
    );
  }
}

Btn.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Btn;
