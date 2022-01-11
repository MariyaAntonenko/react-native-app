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
import {FingerprintScreen} from './FingerprintScreen/FingerprintScreen';
import {FlashMessageScreen} from './FlashMessageScreen/FlashMessageScreen';
import {DownloadScreen} from './DownloadScreen/DownloadScreen';
import {AudioPlayerScreen} from './AudioPlayerScreen/AudioPlayerScreen';
import {QrCodeScannerScreen} from './QrCodeScannerScreen/QrCodeScannerScreen';
import {PushNotificationScreen} from './PushNotificationScreen/PushNotificationScreen';
import {GPSScreen} from './GPSScreen/GPSScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from './DrawerContent';
import {strings} from '../../common/complicatedComponents/Context';

const Drawer = createDrawerNavigator();

export const DrawerScreens = () => {
  return (
    <Drawer.Navigator
      initialRouteName={strings.screens.gps}
      drawerContent={props => <DrawerContent {...props} />}>
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
        component={FingerprintScreen}
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
      <Drawer.Screen
        name={strings.screens.audio}
        component={AudioPlayerScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={strings.screens.qr}
        component={QrCodeScannerScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={strings.screens.push}
        component={PushNotificationScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={strings.screens.gps}
        component={GPSScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
