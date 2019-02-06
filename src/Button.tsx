import React, { Component } from 'react';

interface ButtonProps {
  title: string;
  callback: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonValue?: any;
}

const Button: React.SFC<ButtonProps> = props => {
  return (
    <button type="button" value={props.buttonValue} onClick={props.callback}>
      {props.title}
    </button>
  );
};

export default Button;
