import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {FilteringOfImageStackScreen} from './cameraStackNavigator/cameraStackScreens/FilteringOfImageStackScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserCameraStackScreen} from './cameraStackNavigator/cameraStackScreens/UserCameraStackScreen';
import {EditingOfImageStackScreen} from './cameraStackNavigator/cameraStackScreens/EditingOfImageStackScreen';

const Stack = createNativeStackNavigator();

export const CameraScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Camera"
          component={UserCameraStackScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Filter"
          component={FilteringOfImageStackScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Editor"
          component={EditingOfImageStackScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
