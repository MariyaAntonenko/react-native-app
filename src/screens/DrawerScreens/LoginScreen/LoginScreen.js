import React from 'react';
import {LoginScreenTopSection} from './components/LoginScreenTopSection';
import {Block} from '../../../common/simpleComponents/Block';
import {LoginScreenBottomSection} from './components/LoginScreenBottomSection';

export const LoginScreen = () => {
  return (
    <Block flex={1}>
      <LoginScreenTopSection />
      <LoginScreenBottomSection />
    </Block>
  );
};
