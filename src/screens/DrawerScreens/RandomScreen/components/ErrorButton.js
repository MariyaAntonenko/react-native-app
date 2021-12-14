import React from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import {StyledButton} from '../../../../common/simpleComponents/Button';
import {StyledText} from '../../../../common/simpleComponents/Text';

export const ErrorButton = () => {
  return (
    <Block padding={'3%'} backgroundColor={'white'}>
      <StyledButton
        backgroundColor={'#B51B44'}
        justifyContent={'center'}
        alignItems={'center'}
        padding={'8%'}
        borderRadius={'6px'}>
        <StyledText color={'white'}>Invalid Barcode</StyledText>
      </StyledButton>
    </Block>
  );
};
