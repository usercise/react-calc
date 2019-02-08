import React, { Component } from 'react';
import NumberButton from './NumberButton';
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
          <button onClick={e => this.updateValue('0')}>C</button>
          <button>/</button>
          <button>*</button>
          <button>-</button>
          <NumberButton
            number={7}
            currentValue={this.state.value}
            updateValue={this.updateValue.bind(this)}
          />
          <NumberButton
            number={8}
            currentValue={this.state.value}
            updateValue={this.updateValue.bind(this)}
          />
          <NumberButton
            number={9}
            currentValue={this.state.value}
            updateValue={this.updateValue.bind(this)}
          />
          <button className="Calculator-plus">+</button>
          <NumberButton
            number={4}
            currentValue={this.state.value}
            updateValue={this.updateValue.bind(this)}
          />
          <NumberButton
            number={5}
            currentValue={this.state.value}
            updateValue={this.updateValue.bind(this)}
          />
          <NumberButton
            number={6}
            currentValue={this.state.value}
            updateValue={this.updateValue.bind(this)}
          />
          <button className="Calculator-equal">=</button>
          <NumberButton
            number={1}
            currentValue={this.state.value}
            updateValue={this.updateValue.bind(this)}
          />
          <NumberButton
            number={2}
            currentValue={this.state.value}
            updateValue={this.updateValue.bind(this)}
          />
          <NumberButton
            number={3}
            currentValue={this.state.value}
            updateValue={this.updateValue.bind(this)}
          />
          <NumberButton
            number={0}
            currentValue={this.state.value}
            updateValue={this.updateValue.bind(this)}
          />
          <button>.</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
