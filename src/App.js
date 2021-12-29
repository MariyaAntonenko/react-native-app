import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import FlashMessage from 'react-native-flash-message';
import 'react-native-gesture-handler';
import {Screens} from './screens';
import {StatusBar} from 'react-native';
import {LocalizationProvider} from './common/complicatedComponents/Context';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <LocalizationProvider>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Screens />
      <FlashMessage
        position="top"
        statusBarHeight={25}
        duration={2000}
        hideOnPress={false}
        icon={{icon: 'auto', position: 'right'}}
      />
    </LocalizationProvider>
  );
};

export default App;
