module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: './build/test/coverage/',
  coverageReporters: ['html', 'json', 'text-summary'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.{ts, tsx}', '!**/node_modules/**'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community/(.*)|@react-navigation/(.*)|react-navigation)/|react-native-localization/',
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  // setupFiles: [
  //   './_tests_/config/setupTest.js',
  //   './_tests_/config/test-utils.js',
  //   './node_modules/react-native-gesture-handler/jestSetup.js',
  // ],
  // setupFilesAfterEnv: [
  //   './_tests_/config/setupTest.js',
  //   './_tests_/config/test-utils.js',
  //   './_tests_/_mocks_/react-i18next.useTranslation.js',
  //   './_tests_/_mocks_/svgMocks.js',
  //   '@testing-library/jest-native/extend-expect',
  // ],
  // moduleNameMapper: {
  //   // '^.+\\.svg': '<rootDir>/_mocks_/svgMocks.js',
  // },
};
