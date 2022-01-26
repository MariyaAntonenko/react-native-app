import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {EditingOfImageStackScreen} from './cameraStackNavigator/cameraStackScreens/EditingOfImageStackScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserCameraStackScreen} from './cameraStackNavigator/cameraStackScreens/UserCameraStackScreen';

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
          name="Editor"
          component={EditingOfImageStackScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
