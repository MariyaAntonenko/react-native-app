import React, {useEffect, useState, useMemo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {FormConstructorStackScreen} from './screens/FormConstructorStackScreen';
import {FormDataStoringStackScreen} from './screens/FormDataStoringStackScreen';
import {FormCreatorStackScreen} from './screens/FormCreatorStackScreen';
import {SafeAreaView} from '../../../common/simpleComponents/SafeAreaView';
import {StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
export const FormContext = React.createContext();

export const FormConstructorScreen = () => {
  const [formList, setFormList] = useState([]);
  const [selectedForm, setSelectedForm] = useState({});

  const safeToStorage = formData => {
    let stringFormList = JSON.stringify(formData);
    AsyncStorage.setItem('form-list', stringFormList);
  };
  const getFromStorage = () => {
    return AsyncStorage.getItem('form-list');
  };
  useEffect(() => {
    getFromStorage().then(res => {
      setFormList((res && JSON.parse(res)) || []);
    });
  }, []);
  const value = useMemo(
    () => ({
      formList,
      setFormList,
      getFromStorage,
      safeToStorage,
      selectedForm,
      setSelectedForm,
    }),
    [
      formList,
      setFormList,
      getFromStorage,
      safeToStorage,
      selectedForm,
      setSelectedForm,
    ],
  );
  return (
    <SafeAreaView pt={StatusBar.currentHeight} flex={1}>
      <FormContext.Provider value={value}>
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
      </FormContext.Provider>
    </SafeAreaView>
  );
};
