import React from 'react';
import {Block} from '../../../../../../common/simpleComponents/Block';
import {StyledButton} from '../../../../../../common/simpleComponents/Button';
import {StyledText} from '../../../../../../common/simpleComponents/Text';

export const HeaderNavigation = ({
  Icon,
  arrow,
  buttonText,
  onPressFunction,
}) => {
  return (
    <StyledButton
      onPress={onPressFunction}
      paddingVertical={'5px'}
      paddingHorizontal={'10px'}
      flexDirection={'row'}
      alignItems={'center'}>
      {arrow.isBackButton && <Block paddingHorizontal={'3px'}>{Icon}</Block>}
      <StyledText color={'#3490FD'} fontSize={'16px'}>
        {buttonText}
      </StyledText>
      {arrow.isSaveButton && <Block paddingHorizontal={'3px'}>{Icon}</Block>}
    </StyledButton>
  );
};
