import React, { Component } from 'react';
import './Calculator.css';

interface CalculatorProps {
  isLargeSize: boolean;
}

interface CalculatorState {
  value: string;
}

class Calculator extends Component<CalculatorProps, CalculatorState> {
  constructor(props: CalculatorProps) {
    super(props);
    this.state = {
      value: '0'
    };
  }

  updateValue(newValue: string) {
    this.setState({ value: newValue });
  }

  render() {
    return (
      <div
        className={`Calculator${
          this.props.isLargeSize ? ' Calculator--large' : ''
        }`}
      >
        <h2 className="Calculator-result">{this.state.value}</h2>
        <div className="Calculator-inputs">
          <button>C</button>
          <button>/</button>
          <button>*</button>
          <button>-</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="Calculator-plus">+</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className="Calculator-equal">=</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className="Calculator-zero">0</button>
          <button>.</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
