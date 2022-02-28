import React, {useEffect, useState, useMemo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {FormConstructorStackScreen} from './screens/FormConstructorStackScreen';
import {FormDataStoringStackScreen} from './screens/FormDataStoringStackScreen';
import {FormCreatorStackScreen} from './screens/FormCreatorStackScreen';
import {SafeAreaView} from '../../../common/simpleComponents/SafeAreaView';
import {StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {clone} from 'lodash';

const Stack = createNativeStackNavigator();
export const FormContext = React.createContext();

export const FormConstructorScreen = () => {
  const [formList, setFormList] = useState([]);
  const [filledFormList, setFilledFormList] = useState([]);
  const [selectedForm, setSelectedForm] = useState({});

  const safeToStorage = (formData, key) => {
    let stringFormList = JSON.stringify(formData);
    AsyncStorage.setItem(key, stringFormList);
  };
  const getFromStorageFormList = () => {
    return AsyncStorage.getItem('form-list');
  };
  const getFromStorageFilledFormList = () => {
    return AsyncStorage.getItem('filled-form-list');
  };
  // console.log('NON FILLED FORM LIST>>', formList);
  // console.log('FILLED FORM LIST >>', filledFormList);

  useEffect(() => {
    getFromStorageFormList().then(res => {
      setFormList((res && JSON.parse(res)) || []);
    });
  }, []);
  useEffect(() => {
    getFromStorageFilledFormList().then(res => {
      setFilledFormList((res && JSON.parse(res)) || []);
    });
  }, []);
  const value = useMemo(
    () => ({
      formList,
      setFormList,
      // filledFormList,
      // setFilledFormList,
      getFromStorageFormList,
      getFromStorageFilledFormList,
      safeToStorage,
      selectedForm,
      setSelectedForm,
    }),
    [
      formList,
      setFormList,
      // filledFormList,
      // setFilledFormList,
      getFromStorageFormList,
      getFromStorageFilledFormList,
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
