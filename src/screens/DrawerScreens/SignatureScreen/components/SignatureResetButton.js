import React from 'react';
import {StyledButton} from '../../../../common/simpleComponents/Button';
import {StyledText} from '../../../../common/simpleComponents/Text';

export const SignatureResetButton = () => {
  const onResetSignature = () => {};
  return (
    <StyledButton onPress={onResetSignature}>
      <StyledText color={'gray'} fontWeight={'700'}>
        RESET
      </StyledText>
    </StyledButton>
  );
};
