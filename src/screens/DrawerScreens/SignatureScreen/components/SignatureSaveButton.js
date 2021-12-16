import React from 'react';
import {StyledButton} from '../../../../common/simpleComponents/Button';
import {StyledText} from '../../../../common/simpleComponents/Text';

export const SignatureSaveButton = () => {
  const onSaveSignature = () => {};
  return (
    <StyledButton onPress={onSaveSignature}>
      <StyledText color={'gray'} fontWeight={'700'}>
        SAVE
      </StyledText>
    </StyledButton>
  );
};
