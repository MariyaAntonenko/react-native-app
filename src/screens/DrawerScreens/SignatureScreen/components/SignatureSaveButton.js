import React from 'react';
import {StyledButton} from '../../../../common/simpleComponents/Button';
import {StyledText} from '../../../../common/simpleComponents/Text';

export const SignatureSaveButton = ({saveSign}) => {
  return (
    <StyledButton onPress={saveSign}>
      <StyledText color={'gray'} fontWeight={'700'}>
        SAVE
      </StyledText>
    </StyledButton>
  );
};
