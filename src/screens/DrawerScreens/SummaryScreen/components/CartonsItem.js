import React from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import {StyledText} from '../../../../common/simpleComponents/Text';
import {StyledButton} from '../../../../common/simpleComponents/Button';
import Arrow from '../../../../assets/icons/arrowRight.svg';

export const CartonsItem = ({data}) => {
  return (
    <Block
      backgroundColor={'white'}
      display={'flex'}
      flexDirection={'row'}
      alignItems={'center'}
      pt={'15px'}
      pb={'15px'}
      pl={'10px'}
      pr={'5px'}
      borderBottomWidth={'0.5px'}
      borderBottomColor={'gray'}>
      <Block flex={1} ml={'10px'}>
        <StyledText color={'black'} fontWeight={'500'}>
          {data.article}
        </StyledText>
      </Block>
      <Block
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-around'}
        ml={'25px'}>
        <StyledButton
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          width={'100px'}
          borderRadius={'6px'}
          backgroundColor={'gray'}
          mr={'15px'}>
          <StyledText fontSize={'12px'} color={'white'} fontWeight={'700'}>
            {data.amount}
          </StyledText>
        </StyledButton>
        <Arrow width={15} height={15} fill={'#000'} />
      </Block>
    </Block>
  );
};
