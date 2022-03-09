import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {FormConstructorStackScreen} from './screens/FormConstructorStackScreen';
import {FormDataStoringStackScreen} from './screens/FormDataStoringStackScreen';
import {FormCreatorStackScreen} from './screens/FormCreatorStackScreen';
import {SafeAreaView} from '../../../common/simpleComponents/SafeAreaView';
import {StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getFormList} from '../../../../store/actions/actions';

const Stack = createNativeStackNavigator();

export const FormConstructorScreen = () => {
  const dispatch = useDispatch();

  const getFromStorageFilledFormList = () => {
    return AsyncStorage.getItem('filled-form-list');
  };
  useEffect(() => {
    dispatch(getFormList());
  }, []);
  useEffect(() => {
    getFromStorageFilledFormList().then(res => {});
  }, []);

  return (
    <SafeAreaView pt={StatusBar.currentHeight} flex={1}>
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="FormCreator"
            component={FormCreatorStackScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="FormConstructor"
            component={FormConstructorStackScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="FormDataStoring"
            component={FormDataStoringStackScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
