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
  equalCall: null | {
    value: number;
    func: string;
  };
}

class Calculator extends Component<CalculatorProps, CalculatorState> {
  constructor(props: CalculatorProps) {
    super(props);
    this.state = {
      entryValue: '0',
      stateValue: 0,
      lastFunctionCall: '',
      isEditing: false,
      equalCall: null
    };
  }

  updateInput(newValue: string) {
    this.setState({ entryValue: newValue, isEditing: true });
  }

  functionButtonUpdateValue(newFunction: string) {
    const numberValue = parseFloat(this.state.entryValue);
    if ('C' === newFunction) {
      this.setState({
        entryValue: '0',
        stateValue: 0,
        isEditing: false,
        lastFunctionCall: '',
        equalCall: null
      });
    } else if ('=' === newFunction) {
      const newValue = this.state.equalCall
        ? this.calculateFunction(
            this.state.equalCall.func,
            this.state.equalCall.value
          )
        : this.calculateFunction(this.state.lastFunctionCall, numberValue);
      this.setState(oldState => ({
        stateValue: newValue,
        entryValue: newValue.toString(),
        lastFunctionCall: newFunction,
        equalCall: oldState.equalCall || {
          func: oldState.lastFunctionCall,
          value: numberValue
        },
        isEditing: false
      }));
    } else {
      const newValue = this.calculateFunction(
        this.state.lastFunctionCall,
        numberValue
      );
      this.setState(oldState => ({
        stateValue: newValue,
        entryValue: newValue.toString(),
        lastFunctionCall: newFunction,
        equalCall: null,
        isEditing: false
      }));
    }
  }

  calculateFunction(func: string, value: number) {
    switch (func) {
      case '=':
        return this.state.stateValue;
      case '-':
        return this.state.stateValue - value;
      case '*':
        return this.state.stateValue * value;
      case '/':
        return this.state.stateValue / value;
    }
    return this.state.stateValue + value;
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
          <FunctionButton
            call="C"
            functionButtonUpdateValue={this.functionButtonUpdateValue.bind(
              this
            )}
          />
          <FunctionButton
            call="/"
            functionButtonUpdateValue={this.functionButtonUpdateValue.bind(
              this
            )}
            isActive={this.state.lastFunctionCall === '/'}
          />
          <FunctionButton
            call="*"
            functionButtonUpdateValue={this.functionButtonUpdateValue.bind(
              this
            )}
            isActive={this.state.lastFunctionCall === '*'}
          />
          <FunctionButton
            call="-"
            functionButtonUpdateValue={this.functionButtonUpdateValue.bind(
              this
            )}
            isActive={this.state.lastFunctionCall === '-'}
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
            call="+"
            functionButtonUpdateValue={this.functionButtonUpdateValue.bind(
              this
            )}
            modifier="plus"
            isActive={this.state.lastFunctionCall === '+'}
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
            call="="
            functionButtonUpdateValue={this.functionButtonUpdateValue.bind(
              this
            )}
            modifier="equal"
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
            modifier="zero"
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
