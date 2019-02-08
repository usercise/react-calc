import React, { Component } from 'react';
import NumberButton from './button/NumberButton';
import AdditionButton from './button/AdditionButton';
import SubtractionButton from './button/SubtractionButton';
import MultiplicationButton from './button/MultiplicationButton';
import DivisionButton from './button/DivisionButton';
import EqualButton from './button/EqualButton';
import DotButton from './button/DotButton';
import './Calculator.css';

interface CalculatorProps {
  isLargeSize: boolean;
}

interface CalculatorState {
  entryValue: string;
  stateValue: number;
  isEditing: boolean;
}

class Calculator extends Component<CalculatorProps, CalculatorState> {
  constructor(props: CalculatorProps) {
    super(props);
    this.state = {
      entryValue: '0',
      stateValue: 0,
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
          <DivisionButton
            updateValue={this.updateValue.bind(this)}
            number={this.state.stateValue}
            displayValue={this.state.entryValue}
          />
          <MultiplicationButton
            updateValue={this.updateValue.bind(this)}
            number={this.state.stateValue}
            displayValue={this.state.entryValue}
          />
          <SubtractionButton
            updateValue={this.updateValue.bind(this)}
            number={this.state.stateValue}
            displayValue={this.state.entryValue}
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
          <AdditionButton
            updateValue={this.updateValue.bind(this)}
            number={this.state.stateValue}
            displayValue={this.state.entryValue}
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
          <EqualButton
            updateValue={this.updateValue.bind(this)}
            number={this.state.stateValue}
            displayValue={this.state.entryValue}
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
