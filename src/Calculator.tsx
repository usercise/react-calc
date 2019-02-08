import React, { Component } from 'react';
import NumberButton from './button/NumberButton';
import FunctionButton from './button/FunctionButton';
import DotButton from './button/DotButton';
import './Calculator.css';

interface CalculatorProps {
  isLargeSize: boolean;
}

interface CalculatorState {
  entryValue: string;
  stateValue: number;
  lastFunctionCall: string;
  isEditing: boolean;
}

class Calculator extends Component<CalculatorProps, CalculatorState> {
  constructor(props: CalculatorProps) {
    super(props);
    this.state = {
      entryValue: '0',
      stateValue: 0,
      lastFunctionCall: '+',
      isEditing: false
    };
  }

  updateInput(newValue: string) {
    this.setState({ entryValue: newValue, isEditing: true });
  }

  updateValue(newValue: number, isEditing: boolean) {
    this.setState({
      stateValue: newValue,
      entryValue: newValue.toString(),
      isEditing
    });
  }

  functionButtonUpdateValue(newFunction: string, isEditing: boolean) {
    const newValue = this.calculateFunction();
    this.setState(oldState => ({
      stateValue: newValue,
      entryValue: newValue.toString(),
      lastFunctionCall:
        newFunction === '=' ? oldState.lastFunctionCall : newFunction,
      isEditing
    }));
  }

  calculateFunction() {
    switch (this.state.lastFunctionCall) {
      case '-':
        return this.state.stateValue - parseFloat(this.state.entryValue);
      case '*':
        return this.state.stateValue * parseFloat(this.state.entryValue);
      case '/':
        return this.state.stateValue / parseFloat(this.state.entryValue);
    }
    return this.state.stateValue + parseFloat(this.state.entryValue);
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
            onClick={e =>
              this.setState({
                entryValue: '0',
                stateValue: 0,
                isEditing: false
              })
            }
          >
            C
          </button>
          <FunctionButton
            displayValue={this.state.entryValue}
            call="/"
            functionButtonUpdateValue={this.functionButtonUpdateValue.bind(
              this
            )}
          />
          <FunctionButton
            displayValue={this.state.entryValue}
            call="*"
            functionButtonUpdateValue={this.functionButtonUpdateValue.bind(
              this
            )}
          />
          <FunctionButton
            displayValue={this.state.entryValue}
            call="-"
            functionButtonUpdateValue={this.functionButtonUpdateValue.bind(
              this
            )}
          />
          <NumberButton
            number={7}
            isEditing={this.state.isEditing}
            displayValue={this.state.entryValue}
            updateInput={this.updateInput.bind(this)}
          />
          <NumberButton
            number={8}
            isEditing={this.state.isEditing}
            displayValue={this.state.entryValue}
            updateInput={this.updateInput.bind(this)}
          />
          <NumberButton
            number={9}
            isEditing={this.state.isEditing}
            displayValue={this.state.entryValue}
            updateInput={this.updateInput.bind(this)}
          />
          <FunctionButton
            displayValue={this.state.entryValue}
            call="+"
            functionButtonUpdateValue={this.functionButtonUpdateValue.bind(
              this
            )}
          />
          <NumberButton
            number={4}
            isEditing={this.state.isEditing}
            displayValue={this.state.entryValue}
            updateInput={this.updateInput.bind(this)}
          />
          <NumberButton
            number={5}
            isEditing={this.state.isEditing}
            displayValue={this.state.entryValue}
            updateInput={this.updateInput.bind(this)}
          />
          <NumberButton
            number={6}
            isEditing={this.state.isEditing}
            displayValue={this.state.entryValue}
            updateInput={this.updateInput.bind(this)}
          />
          <FunctionButton
            displayValue={this.state.entryValue}
            call="="
            functionButtonUpdateValue={this.functionButtonUpdateValue.bind(
              this
            )}
          />
          <NumberButton
            number={1}
            isEditing={this.state.isEditing}
            displayValue={this.state.entryValue}
            updateInput={this.updateInput.bind(this)}
          />
          <NumberButton
            number={2}
            isEditing={this.state.isEditing}
            displayValue={this.state.entryValue}
            updateInput={this.updateInput.bind(this)}
          />
          <NumberButton
            number={3}
            isEditing={this.state.isEditing}
            displayValue={this.state.entryValue}
            updateInput={this.updateInput.bind(this)}
          />
          <NumberButton
            number={0}
            isEditing={this.state.isEditing}
            displayValue={this.state.entryValue}
            updateInput={this.updateInput.bind(this)}
          />
          <DotButton
            isEditing={this.state.isEditing}
            displayValue={this.state.entryValue}
            updateInput={this.updateInput.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
