import React from 'react';
import {StyledButton} from '../../../../common/simpleComponents/Button';
import {StyledText} from '../../../../common/simpleComponents/Text';

export const FormButton = ({onPressFunc, bgColor, align, text}) => {
  return (
    <StyledButton
      onPress={onPressFunc}
      alignSelf={align}
      marginHorizontal={'30px'}
      marginVertical={'10px'}
      backgroundColor={bgColor}
      borderRadius={'6px'}
      paddingVertical={'5px'}
      paddingHorizontal={'15px'}>
      <StyledText color={'white'}>{text}</StyledText>
    </StyledButton>
  );
};
