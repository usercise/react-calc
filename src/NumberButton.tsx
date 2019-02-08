import React from 'react';
import Button from './Button';

interface NumberButtonProps {
  number: number;
  displayValue: string;
  isEditing: boolean;
  updateValue: (newValue: string) => void;
}

const NumberButton: React.SFC<NumberButtonProps> = props => {
  const strNumber = `${props.number}`;
  const addValue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const newValue =
      !props.isEditing || props.displayValue === '0'
        ? strNumber
        : `${props.displayValue}${props.number}`;
    props.updateValue(newValue);
  };
  return (
    <Button title={strNumber} buttonValue={props.number} callback={addValue} />
  );
};
export default NumberButton;
