import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import FlashMessage from 'react-native-flash-message';
import 'react-native-gesture-handler';
import {Screens} from './screens';
import {StatusBar} from 'react-native';
import {LocalizationProvider} from './common/complicatedComponents/Context';
import {store, persistor} from '../store/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <LocalizationProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
        </PersistGate>
      </Provider>
    </LocalizationProvider>
  );
};

export default App;
