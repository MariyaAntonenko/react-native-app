import React from 'react';
import {Block} from '../simpleComponents/Block';
import {StyledText} from '../simpleComponents/Text';

export const SecondaryHeader = ({columName}) => {
  return (
    <Block
      backgroundColor={'white'}
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'space-between'}
      pt={'20px'}
      pb={'15px'}
      pr={'80px'}
      pl={'30px'}
      borderBottomColor={'gray'}
      borderBottomStyle={'solid'}
      borderBottomWidth={'0.5px'}>
      <StyledText fontSize={'15px'} color={'gray'} fontWeight={'400'}>
        {columName} NO.
      </StyledText>
      <StyledText fontSize={'15px'} color={'gray'} fontWeight={'400'}>
        ACT.
      </StyledText>
    </Block>
  );
};
