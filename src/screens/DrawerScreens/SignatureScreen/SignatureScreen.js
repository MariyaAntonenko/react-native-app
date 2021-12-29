import React from 'react';
import {SafeAreaView} from '../../../common/simpleComponents/SafeAreaView';
import {SignatureScreenHeader} from './components/SignatureScreenHeader';
import {StatusBar} from 'react-native';

export const SignatureScreen = () => {
  return (
    <SafeAreaView
      pt={StatusBar.currentHeight}
      backgroundColor={'wheat'}
      flex={1}>
      <SignatureScreenHeader />
    </SafeAreaView>
  );
};
