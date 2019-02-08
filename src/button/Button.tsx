import React from 'react';
import './Button.css';

interface ButtonProps {
  title: string;
  callback: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonValue?: any;
  modifier?: string;
}

const Button: React.SFC<ButtonProps> = props => {
  const classNames = props.modifier
    ? `Button Button--${props.modifier}`
    : 'Button';
  return (
    <button
      className={classNames}
      type="button"
      value={props.buttonValue}
      onClick={props.callback}
    >
      {props.title}
    </button>
  );
};

export default Button;
