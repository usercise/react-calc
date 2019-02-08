import React from 'react';
import Button from './Button';

interface DotButtonProps {
  displayValue: string;
  isEditing: boolean;
  updateInput: (newValue: string) => void;
}

const DotButton: React.SFC<DotButtonProps> = props => {
  const addValue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let newValue;
    if (!props.isEditing || props.displayValue === '0') {
      newValue = '0.';
    } else if (-1 === props.displayValue.indexOf('.')) {
      newValue = `${props.displayValue}.`;
    } else {
      newValue = props.displayValue;
    }
    props.updateInput(newValue);
  };
  return <Button title="." callback={addValue} />;
};
export default DotButton;
