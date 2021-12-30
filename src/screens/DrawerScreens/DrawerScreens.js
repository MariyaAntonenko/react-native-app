import React from 'react';
import {ArticlesScreen} from './ArticlesScreen/ArticlesScreen';
import {SummaryScreen} from './SummaryScreen/SummaryScreen';
import {LoginScreen} from './LoginScreen/LoginScreen';
import {ChartScreen} from './ChartScreen/ChartScreen';
import {RandomScreen} from './RandomScreen/RandomScreen';
import {SignatureScreen} from './SignatureScreen/SignatureScreen';
import {ModalScreen} from './ModalScreen/ModalScreen';
import {WebViewScreen} from './WebViewScreen/WebViewScreen';
import {MapScreen} from './MapScreen/MapScreen';
import {CameraScreen} from './CameraScreen/CameraScreen';
import {FingerprintScreenIos} from './FingerprintScreen/FingerprintScreen.ios';
import {FingerprintScreenAndroid} from './FingerprintScreen/FingerprintScreen.android';
import {FlashMessageScreen} from './FlashMessageScreen/FlashMessageScreen';
import {DownloadScreen} from './DownloadScreen/DownloadScreen';
import {Platform} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from './DrawerContent';
import {strings} from '../../common/complicatedComponents/Context';

const Drawer = createDrawerNavigator();

export const DrawerScreens = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name={strings.screens.articles}
        component={ArticlesScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={strings.screens.summary}
        options={{headerShown: false}}
        component={SummaryScreen}
      />
      <Drawer.Screen
        name={strings.screens.login}
        options={{headerShown: false}}
        component={LoginScreen}
      />
      <Drawer.Screen
        name={strings.screens.chart}
        options={{headerShown: false}}
        component={ChartScreen}
      />
      <Drawer.Screen
        name={strings.screens.random}
        options={{headerShown: false}}
        component={RandomScreen}
      />
      <Drawer.Screen
        name={strings.screens.signature}
        options={{headerShown: false}}
        component={SignatureScreen}
      />
      <Drawer.Screen
        name={strings.screens.modal}
        component={ModalScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={strings.screens.webview}
        component={WebViewScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={strings.screens.map}
        component={MapScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={strings.screens.camera}
        component={CameraScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={strings.screens.fingerprint}
        component={
          Platform.OS === 'ios'
            ? FingerprintScreenIos
            : FingerprintScreenAndroid
        }
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={strings.screens.flashmessage}
        component={FlashMessageScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={strings.screens.download}
        component={DownloadScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
