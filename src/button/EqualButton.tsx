import React from 'react';
import Button from './Button';
import { FunctionButtonProps } from './IFunctionButton';

const EqualButton: React.SFC<FunctionButtonProps> = props => {
  const equalCall = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    props.updateValue(props.number || parseFloat(props.displayValue), false);
  };
  return <Button title="=" callback={equalCall} />;
};
export default EqualButton;
