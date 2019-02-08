import React, { Component } from 'react';
import NumberButton from './NumberButton';
import './Calculator.css';

interface CalculatorProps {
  isLargeSize: boolean;
}

interface CalculatorState {
  entryValue: string;
  isEditing: boolean;
}

class Calculator extends Component<CalculatorProps, CalculatorState> {
  constructor(props: CalculatorProps) {
    super(props);
    this.state = {
      entryValue: '0',
      isEditing: false
    };
  }

  updateValue(newValue: string) {
    this.setState({ entryValue: newValue, isEditing: true });
  }

  render() {
    return (
      <div
        className={`Calculator${
          this.props.isLargeSize ? ' Calculator--large' : ''
        }`}
      >
        <h2 className="Calculator-result">{this.state.entryValue}</h2>
        <div className="Calculator-inputs">
          <button
            onClick={e => this.setState({ entryValue: '0', isEditing: false })}
          >
            C
          </button>
          <button>/</button>
          <button>*</button>
          <button>-</button>
          <NumberButton
            number={7}
            isEditing={this.state.isEditing}
            displayValue={this.state.entryValue}
            updateValue={this.updateValue.bind(this)}
          />
          <NumberButton
            number={8}
            isEditing={this.state.isEditing}
            displayValue={this.state.entryValue}
            updateValue={this.updateValue.bind(this)}
          />
          <NumberButton
            number={9}
            isEditing={this.state.isEditing}
            displayValue={this.state.entryValue}
            updateValue={this.updateValue.bind(this)}
          />
          <button className="Calculator-plus">+</button>
          <NumberButton
            number={4}
            isEditing={this.state.isEditing}
            displayValue={this.state.entryValue}
            updateValue={this.updateValue.bind(this)}
          />
          <NumberButton
            number={5}
            isEditing={this.state.isEditing}
            displayValue={this.state.entryValue}
            updateValue={this.updateValue.bind(this)}
          />
          <NumberButton
            number={6}
            isEditing={this.state.isEditing}
            displayValue={this.state.entryValue}
            updateValue={this.updateValue.bind(this)}
          />
          <button className="Calculator-equal">=</button>
          <NumberButton
            number={1}
            isEditing={this.state.isEditing}
            displayValue={this.state.entryValue}
            updateValue={this.updateValue.bind(this)}
          />
          <NumberButton
            number={2}
            isEditing={this.state.isEditing}
            displayValue={this.state.entryValue}
            updateValue={this.updateValue.bind(this)}
          />
          <NumberButton
            number={3}
            isEditing={this.state.isEditing}
            displayValue={this.state.entryValue}
            updateValue={this.updateValue.bind(this)}
          />
          <NumberButton
            number={0}
            isEditing={this.state.isEditing}
            displayValue={this.state.entryValue}
            updateValue={this.updateValue.bind(this)}
          />
          <button>.</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
