import React from 'react';
import Button from './Button';

interface NumberButtonProps {
  number: number;
  currentValue: string;
  updateValue: (newValue: string) => void;
}

const NumberButton: React.SFC<NumberButtonProps> = props => {
  const strNumber = `${props.number}`;
  const addValue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const newValue =
      props.currentValue === '0'
        ? strNumber
        : `${props.currentValue}${props.number}`;
    props.updateValue(newValue);
  };
  return (
    <Button title={strNumber} buttonValue={props.number} callback={addValue} />
  );
};
export default NumberButton;
