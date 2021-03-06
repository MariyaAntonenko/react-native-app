import React from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import {StyledText} from '../../../../common/simpleComponents/Text';
import Register from '../../../../assets/icons/register.svg';

export const LoginScreenHeader = () => {
  return (
    <Block
      padding={'9%'}
      flex={1}
      backgroundColor={'#ED993E'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}>
      <Block
        display={'flex'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'center'}>
        <StyledText color={'white'} fontWeight={'400'} fontSize={'130px'}>
          D
        </StyledText>
        <Block position={'relative'} bottom={'50px'} right={'20px'}>
          <Register width={20} height={20} fill={'#ffff'} />
        </Block>
      </Block>
    </Block>
  );
};
