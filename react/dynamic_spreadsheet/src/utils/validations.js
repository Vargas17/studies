import { types } from './constants';

// eslint-disable-next-line no-restricted-globals
const isNumeric = (num) => !isNaN(num);

export const validateType = (value, type) => {
  if (!value) return true;

  const dateReg = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d|([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
  switch (type) {
    case types.text:
      return typeof value === 'string';
    case types.date:
      return dateReg.test(value);
    case types.number:
      return isNumeric(value);
    default:
      return false;
  }
};
