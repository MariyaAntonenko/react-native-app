import * as yup from 'yup';
import {ValidationError} from 'yup';

export const currentErrors = [
  'Minimum 7 characters, ',
  '1 special symbol, ',
  '1 digit, ',
  '1 uppercase letter, ',
  '1 lowercase letter, ',
  'do not repeat',
];

export const loginValidationSchema = yup.object().shape({
  username: yup
    .string()
    .min(7, 'Minimum 7 characters')
    .required('Required')
    .trim(),
  password: yup
    .string()
    .required('Required')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      [
        'Minimum 7 characters, ',
        '1 special symbol, ',
        '1 digit, ',
        '1 uppercase letter, ',
        '1 lowercase letter, ',
        'do not repeat',
      ],
    )
    // .matches(/^.*(?=.{7,}).*$/, 'Minimum 7 characters')
    // .matches(/^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1}).*$/, '1 special symbol')
    // .matches(/^.*(?=.*\d).*$/, '1 digit')
    // .matches(/^(?=.*[A-Z])/, '1 uppercase letter')
    // .matches(/^(?=.*[a-z])/, '1 lowercase letter')
    // .matches(/^(?!.*(.)\1+).*$/, 'do not repeat')
    .trim(),
});
console.log(ValidationError);
