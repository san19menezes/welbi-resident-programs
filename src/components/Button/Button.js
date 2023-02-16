import React from 'react';
import './Button.scss';

const Button = ({ type = 'button', onClick = () => {}, displayText = '' }) => {
  return (
    <button type={type} onClick={onClick}>
      {displayText}
    </button>
  );
};

export default Button;
