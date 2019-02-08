import React from 'react';
import Button from './Button';
import { FunctionButtonProps } from './IFunctionButton';

const SubtractionButton: React.SFC<FunctionButtonProps> = props => {
  const subtractionCall = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    props.updateValue(props.number - parseFloat(props.displayValue), false);
  };
  return <Button title="-" callback={subtractionCall} />;
};
export default SubtractionButton;
