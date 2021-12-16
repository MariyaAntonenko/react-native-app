import React from 'react';
import {ArticlesScreen} from './ArticlesScreen/ArticlesScreen';
import {SummaryScreen} from './SummaryScreen/SummaryScreen';
import {LoginScreen} from './LoginScreen/LoginScreen';
import {ChartScreen} from './ChartScreen/ChartScreen';
import {RandomScreen} from './RandomScreen/RandomScreen';
import {SignatureScreen} from './SignatureScreen/SignatureScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from './CustomDrawerContent';
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
    </Drawer.Navigator>
  );
};
