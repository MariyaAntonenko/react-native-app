import React from 'react';
import {LoginScreenHeader} from './LoginScreenHeader';
import {LoginScreenFooter} from './LoginScreenFooter';
import {LoginForm} from './LoginForm';
import {Block} from '../../../../common/simpleComponents/Block';

export const LoginScreenItemsContainer = () => {
  return (
    <Block flex={1}>
      <LoginScreenHeader />
      <LoginForm />
      <LoginScreenFooter />
    </Block>
  );
};
