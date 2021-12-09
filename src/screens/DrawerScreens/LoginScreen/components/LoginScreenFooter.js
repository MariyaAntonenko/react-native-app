import React from 'react';
import {StyledButton} from '../../../../common/simpleComponents/Button';
import {StyledText} from '../../../../common/simpleComponents/Text';
import {Block} from '../../../../common/simpleComponents/Block';

export const LoginScreenFooter = () => {
  return (
    <Block flex={1}>
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
