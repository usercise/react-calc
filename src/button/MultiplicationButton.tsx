import React from 'react';
import Button from './Button';
import { FunctionButtonProps } from './IFunctionButton';

const MultiplicationButton: React.SFC<FunctionButtonProps> = props => {
  const multiplicationCall = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    props.updateValue(props.number * parseFloat(props.displayValue), false);
  };
  return <Button title="*" callback={multiplicationCall} />;
};
export default MultiplicationButton;
