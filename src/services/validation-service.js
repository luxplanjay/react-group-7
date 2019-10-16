/* eslint-disable */
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';

export const validateEmail = email => {
  const isValid = isEmail(email);

  return {
    valid: isValid,
    message: isValid ? undefined : 'Invalid email pattern!',
  };
};

export const validateStringLength = (
  string,
  bounds = { min: 0, max: undefined },
) => {
  const isValid = isLength(string, bounds);

  return {
    valid: isValid,
    message: isValid
      ? undefined
      : `Login length has to be ${bounds.min} to ${bounds.max} characters long!`,
  };
};
