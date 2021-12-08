import React from 'react';
import {Block} from '../../simpleComponents/Block';
import {StyledButton} from '../../simpleComponents/Button';
import {StyledText} from '../../simpleComponents/Text';

export const Footer = ({footerConst}) => {
  return (
    <Block
      backgroundColor={'white'}
      pr={'2%'}
      pl={'2%'}
      height={'15%'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      border={'0.5px solid gray'}>
      <StyledButton
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        border={'2px solid #678497'}
        borderRadius={'6px'}
        padding={'5% 15%'}>
        <StyledText
          textAlign={'center'}
          fontWeight={'700'}
          fontSize={'15px'}
          color={'#678497'}>
          {footerConst.title}
        </StyledText>
      </StyledButton>
    </Block>
  );
};
