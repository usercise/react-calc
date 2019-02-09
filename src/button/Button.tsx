import React from 'react';
import './Button.css';

interface ButtonProps {
  title: string;
  callback: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonValue?: any;
  modifier?: string;
  isActive?: boolean;
}

const Button: React.SFC<ButtonProps> = props => {
  const isActive = props.isActive ? ' isActive' : '';
  const classNames = props.modifier
    ? `Button${isActive} Button--${props.modifier}`
    : `Button${isActive}`;
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
