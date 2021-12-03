import React from 'react';
import {Block} from './styledComponents/Block';
import {StyledButton} from './styledComponents/Button';
import {StyledText} from './styledComponents/Text';

export const Footer = () => {
  return (
    <Block
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      border={'0.5px solid gray'}
      pt={'10px'}
      pb={'10px'}>
      <StyledButton
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        border={'2px solid #678497'}
        borderRadius={'6px'}
        padding={'20px 30px'}>
        <StyledText fontWeight={'700'} fontSize={'15px'} color={'#678497'}>
          Pull the trigger to scan a carton barcode.
        </StyledText>
      </StyledButton>
    </Block>
  );
};
