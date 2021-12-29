import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
import {Screens} from './screens';
import {LocalizationProvider} from './common/complicatedComponents/Context';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <LocalizationProvider>
      <Screens />
    </LocalizationProvider>
  );
};

export default App;
