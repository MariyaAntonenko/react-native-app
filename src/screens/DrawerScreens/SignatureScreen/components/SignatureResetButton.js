import React from 'react';
import {StyledButton} from '../../../../common/simpleComponents/Button';
import {StyledText} from '../../../../common/simpleComponents/Text';

export const SignatureResetButton = ({resetSign}) => {
  return (
    <StyledButton onPress={resetSign}>
      <StyledText color={'gray'} fontWeight={'700'}>
        RESET
      </StyledText>
    </StyledButton>
  );
};
