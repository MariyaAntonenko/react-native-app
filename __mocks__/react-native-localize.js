// import RNLocalize from "react-native-localize/mock";

jest.mock('react-native-localize', () => {
  const RNLocalize = require('react-native-localize/mock');
});
