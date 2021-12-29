import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import FlashMessage from 'react-native-flash-message';
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
      <FlashMessage
        position="top"
        // hideStatusBar
        duration={2000}
        hideOnPress={false}
        icon={{icon: 'auto', position: 'right'}}
      />
    </LocalizationProvider>
  );
};

export default App;
