import React from 'react';
import Button from './Button';
import { FunctionButtonProps } from './IFunctionButton';

const AdditionButton: React.SFC<FunctionButtonProps> = props => {
  const additionCall = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    props.updateValue(props.number + parseFloat(props.displayValue), false);
  };
  return <Button title="+" callback={additionCall} />;
};
export default AdditionButton;
