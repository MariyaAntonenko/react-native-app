import React from 'react';
import {SafeAreaView} from '../../../common/simpleComponents/SafeAreaView';
import {SignatureScreenHeader} from './components/SignatureScreenHeader';

export const SignatureScreen = () => {
  return (
    <SafeAreaView backgroundColor={'wheat'} flex={1}>
      <SignatureScreenHeader />
    </SafeAreaView>
  );
};
