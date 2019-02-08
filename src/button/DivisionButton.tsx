import React from 'react';
import Button from './Button';
import { FunctionButtonProps } from './IFunctionButton';

const DivisionButton: React.SFC<FunctionButtonProps> = props => {
  const divisionCall = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    props.updateValue(props.number / parseFloat(props.displayValue), false);
  };
  return <Button title="/" callback={divisionCall} />;
};
export default DivisionButton;
