import React from 'react';
import {StyledButton} from '../../../../common/simpleComponents/Button';
import {StyledText} from '../../../../common/simpleComponents/Text';
import {Platform} from 'react-native';

export const FormButton = ({onPressFunc, bgColor, align, text}) => {
  return (
    <StyledButton
      onPress={onPressFunc}
      alignSelf={align}
      marginHorizontal={'30px'}
      marginVertical={Platform.OS === 'ios' ? '10px' : '15px'}
      backgroundColor={bgColor}
      borderRadius={'6px'}
      paddingVertical={'5px'}
      paddingHorizontal={'15px'}>
      <StyledText color={'white'}>{text}</StyledText>
    </StyledButton>
  );
};
