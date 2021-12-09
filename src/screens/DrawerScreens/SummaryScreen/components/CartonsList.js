import React, {useCallback} from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import {SwipeList} from '../../../../common/complicatedComponents/SwipeList';
import {
  cartonsData,
  cartonsSecondaryHeaderName,
} from '../../../../common/consts';
import {CartonsItem} from './CartonsItem';
import {SecondaryHeader} from '../../../../common/complicatedComponents/SecondaryHeader';

export const CartonsList = () => {
  const renderItem = useCallback(({item}) => <CartonsItem data={item} />, []);
  return (
    <Block backgroundColor={'white'} flex={1}>
      <SecondaryHeader columName={cartonsSecondaryHeaderName} />
      <Block backgroundColor={'white'} flex={1}>
        <SwipeList data={cartonsData} renderItem={renderItem} />
      </Block>
    </Block>
  );
};
