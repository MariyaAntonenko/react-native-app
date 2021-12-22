import React from 'react';
import 'react-native-gesture-handler';
import {Screens} from './screens';
import {LocalizationProvider} from './common/complicatedComponents/Context';
import {StyledText} from './common/simpleComponents/Text';

const App = () => {
  return (
    <LocalizationProvider>
      {/*<Screens />*/}
      <StyledText>APP</StyledText>
    </LocalizationProvider>
  );
};

export default App;
