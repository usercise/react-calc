import React from 'react';
import Button from './Button';

interface FunctionButtonProps {
  call: string;
  displayValue: string;
  modifier?: string;
  functionButtonUpdateValue: (newFunction: string, isEditing: boolean) => void;
}

const FunctionButton: React.SFC<FunctionButtonProps> = props => {
  const buttonCall = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    props.functionButtonUpdateValue(props.call, false);
  };
  return (
    <Button
      modifier={props.modifier}
      title={props.call}
      callback={buttonCall}
    />
  );
};
export default FunctionButton;
