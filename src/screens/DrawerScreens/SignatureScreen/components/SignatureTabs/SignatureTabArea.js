import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SignatureTabBar} from './SignatureTabBar';
import {CreateTabScreen} from '../CreateTabScreen';
import {MySignatureTabScreen} from '../MySignatureTabScreen';

const Tab = createMaterialTopTabNavigator();

export const SignatureTabArea = () => {
  return (
    <Tab.Navigator
      screenOptions={{swipeEnabled: false}}
      tabBar={props => <SignatureTabBar {...props} />}>
      <Tab.Screen name="Create" component={CreateTabScreen} />
      <Tab.Screen name="My Signatures" component={MySignatureTabScreen} />
    </Tab.Navigator>
  );
};
