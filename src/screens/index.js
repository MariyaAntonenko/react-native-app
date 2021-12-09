import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DrawerScreens} from './DrawerScreens/DrawerScreens';

const Stack = createNativeStackNavigator();

export const Screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Main'}>
        <Stack.Screen
          options={{headerShown: false}}
          name={'Main'}
          component={DrawerScreens}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
