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
      let isValidPassword = repeatRegex.test(value);
      if (!isValidPassword) {
        return false;
      }
      return true;
    })
    .test('Uppercase-test', '1 uppercase letter', function (value) {
      const uppercaseRegex = /^(?=.*[A-Z])/;
      let isValidPassword = uppercaseRegex.test(value);
      if (!isValidPassword) {
        return false;
      }
      return true;
    })
    .test('Lowercase-test', '1 lowercase letter', function (value) {
      const lowercaseRegex = /^(?=.*[a-z])/;
      let isValidPassword = lowercaseRegex.test(value);
      if (!isValidPassword) {
        return false;
      }
      return true;
    })
    .test('number-test', '1 number', function (value) {
      const numberRegex = /^.*(?=.*\d).*$/;
      let isValidPassword = numberRegex.test(value);
      if (!isValidPassword) {
        return false;
      }
      return true;
    })
    .test('Special-test', '1 special symbol', function (value) {
      const specialRegex = /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1}).*$/;
      let isValidPassword = specialRegex.test(value);
      if (!isValidPassword) {
        return false;
      }
      return true;
    })

    .min(7, 'Minimum 7 characters'),
});
