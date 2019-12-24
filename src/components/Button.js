import React from 'react';
import './Button.css';

const Button = ({ label, type = 'button', onClick = () => null }) => (
  <button className="Button" type={type} onClick={onClick}>
    {label}
  </button>
);

export default Button;
