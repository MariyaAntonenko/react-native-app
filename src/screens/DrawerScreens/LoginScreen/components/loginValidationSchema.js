import * as yup from 'yup';

export const currentErrors = [
  '1 uppercase letter',
  '1 lowercase letter',
  '1 number',
  '1 special symbol',
  'Do not repeat',
  'Minimum 7 characters',
  'Required',
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
    .test('repeat-test', 'Do not repeat', function (value) {
      const repeatRegex = /^(?!.*(.)\1+).*$/;
      return repeatRegex.test(value);
    })
    .test('Uppercase-test', '1 uppercase letter', function (value) {
      const uppercaseRegex = /^(?=.*[A-Z])/;
      return uppercaseRegex.test(value);
    })
    .test('Lowercase-test', '1 lowercase letter', function (value) {
      const lowercaseRegex = /^(?=.*[a-z])/;
      return lowercaseRegex.test(value);
    })
    .test('number-test', '1 number', function (value) {
      const numberRegex = /^.*(?=.*\d).*$/;
      return numberRegex.test(value);
    })
    .test('Special-test', '1 special symbol', function (value) {
      const specialRegex = /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1}).*$/;
      return specialRegex.test(value);
    })
    .min(7, 'Minimum 7 characters'),
});
