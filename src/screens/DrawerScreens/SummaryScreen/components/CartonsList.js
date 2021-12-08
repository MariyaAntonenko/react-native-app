import React, {useCallback} from 'react';
import {CartonsItem} from './CartonsItem';
import {Block} from '../../../../common/simpleComponents/Block';
import {StyledText} from '../../../../common/simpleComponents/Text';
import {SwipeList} from '../../SwipeList';
import {cartonsData} from '../../../../common/consts';

export const CartonsList = () => {
  const renderItem = useCallback(({item}) => <CartonsItem data={item} />, []);
  const handleKey = useCallback(item => item.id, []);
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
        <SwipeList
          data={cartonsData}
          handleKey={handleKey}
          renderItem={renderItem}
        />
      </Block>
    </Block>
  );
};
