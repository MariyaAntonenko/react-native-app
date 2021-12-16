import React from 'react';
import 'react-native-gesture-handler';
import {Screens} from './screens';
import {strings} from './common/complicatedComponents/Context';
import {LocalizationProvider} from './common/complicatedComponents/Context';

const App = () => {
  console.log(strings.getLanguage());
  return (
    <LocalizationProvider>
      <Screens />
    </LocalizationProvider>
  );
};

export default App;
