import React, { Component } from 'react';
// import './App.css';

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
        {this.state.value}
      </div>
    );
  }
}

export default Calculator;
