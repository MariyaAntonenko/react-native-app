import React from 'react';
import {LoginScreenItemsContainer} from './components/LoginScreenItemsContainer';
import {Platform, Keyboard, TouchableWithoutFeedback} from 'react-native';
import {StyledKeyboardAvoidingView} from '../../../common/simpleComponents/KeyboardAvoidingView';

export const LoginScreen = () => {
  return (
    <StyledKeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      flex={1}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LoginScreenItemsContainer />
      </TouchableWithoutFeedback>
    </StyledKeyboardAvoidingView>
  );
};
