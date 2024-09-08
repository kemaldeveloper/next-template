import * as yup from 'yup';
import { EMAIL_REGEX } from '../constants';

export const customEmailValidation = yup.string().test('is-email', 'inputs.email.email-error', function (value) {
  if (!value) return true;

  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;
  return regex.test(value);
});

export const emailValidationScheme = yup.string().matches(EMAIL_REGEX, { message: 'Неверный формат почтового адреса' });
