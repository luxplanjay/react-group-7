import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

// 3 стейт для кнопи -анимация процесса запроса

const Button = ({ type, label, disabled }) => {
  return (
    <button
      className={disabled ? styles.disabled : styles.button}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  disabled: false
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;
