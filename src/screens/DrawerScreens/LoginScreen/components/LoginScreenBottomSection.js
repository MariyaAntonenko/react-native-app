import React from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import {StyledText} from '../../../../common/simpleComponents/Text';
import {LoginForm} from './LoginForm';
import {StyledButton} from '../../../../common/simpleComponents/Button';

export const LoginScreenBottomSection = () => {
  return (
    <Block display={'flex'} padding={'10%'}>
      <LoginForm />
      <StyledButton
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        height={'50px'}>
        <StyledText color={'#013556'} fontSize={'16px'}>
          FORGOT PASSWORD?
        </StyledText>
      </StyledButton>
      <Block mt={'10px'}>
        <StyledText textAlign={'center'} fontSize={'12px'}>
          2.3.19(24628462) - DEBAG
        </StyledText>
      </Block>
    </Block>
  );
};
