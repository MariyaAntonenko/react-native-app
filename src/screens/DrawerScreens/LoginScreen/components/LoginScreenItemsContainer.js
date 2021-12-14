import React from 'react';
import {LoginScreenHeader} from './LoginScreenHeader';
import {LoginScreenFooter} from './LoginScreenFooter';
import {LoginForm} from './LoginForm';
import {Block} from '../../../../common/simpleComponents/Block';
import {ScrollView} from 'react-native-gesture-handler';

export const LoginScreenItemsContainer = () => {
  return (
    <Block flex={1}>
      <LoginScreenHeader />
      <ScrollView>
        <LoginForm />
        <LoginScreenFooter />
      </ScrollView>
    </Block>
  );
};
