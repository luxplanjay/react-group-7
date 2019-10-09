import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontStack } from '../styled-variables';

const makeColor = props => {
  return props.disabled ? '#00000042' : '#ffffff';
};

const StyledButton = styled.button`
  display: inline-flex;
  margin: 0 4px;
  padding: 8px 24px;
  border: 0;
  border-radius: 2px;
  font-size: 14px;
  font-family: inherit;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  font-family: ${fontStack};
  color: ${makeColor};
  background-color: ${props => (props.disabled ? '#0000001f' : '#2196f3')};

  :hover,
  :focus {
    background-color: #1976d2;
  }
`;

const Button = ({ type, label, disabled }) => {
  return (
    <StyledButton type={type} disabled={disabled}>
      {label}
    </StyledButton>
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
