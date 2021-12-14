import React from 'react';
import {ArticlesScreen} from './ArticlesScreen/ArticlesScreen';
import {SummaryScreen} from './SummaryScreen/SummaryScreen';
import {LoginScreen} from './LoginScreen/LoginScreen';
import {ChartScreen} from './ChartScreen/ChartScreen';
import {RandomScreen} from './RandomScreen/RandomScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export const DrawerScreens = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Articles in carton"
        component={ArticlesScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Summary"
        options={{headerShown: false}}
        component={SummaryScreen}
      />
      <Drawer.Screen
        name="Login"
        options={{headerShown: false}}
        component={LoginScreen}
      />
      <Drawer.Screen
        name="Chart"
        options={{headerShown: false}}
        component={ChartScreen}
      />
      <Drawer.Screen
        name="Random"
        options={{headerShown: false}}
        component={RandomScreen}
      />
    </Drawer.Navigator>
  );
};
