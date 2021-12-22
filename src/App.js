import React from 'react';
import 'react-native-gesture-handler';
import {Screens} from './screens';
import {LocalizationProvider} from './common/complicatedComponents/Context';

const App = () => {
  return (
    <LocalizationProvider>
      <Screens />
    </LocalizationProvider>
  );
};

export default App;
