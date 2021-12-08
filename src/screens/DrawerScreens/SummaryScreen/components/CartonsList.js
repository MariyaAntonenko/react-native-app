import React, {useCallback} from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import {StyledText} from '../../../../common/simpleComponents/Text';
import {SwipeList} from '../../../../common/complicatedComponents/SwipeList';
import {cartonsData} from '../../../../common/consts';
import {CartonsItem} from './CartonsItem';

export const CartonsList = () => {
  const renderItem = useCallback(({item}) => <CartonsItem data={item} />, []);
  return (
    <Block backgroundColor={'white'} flex={1}>
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
          CARTONS NO.
        </StyledText>
        <StyledText fontSize={'15px'} color={'gray'} fontWeight={'400'}>
          ACT.
        </StyledText>
      </Block>
      <Block backgroundColor={'white'} flex={1}>
        <SwipeList data={cartonsData} renderItem={renderItem} />
      </Block>
    </Block>
  );
};
