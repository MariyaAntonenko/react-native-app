import React, {useCallback} from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import {SwipeList} from '../../../../common/complicatedComponents/SwipeList';
import {
  cartonsData,
  cartonsSecondaryHeaderName,
} from '../../../../common/consts';
import {CartonsItem} from './CartonsItem';
import {SecondaryHeader} from '../../../../common/complicatedComponents/SecondaryHeader';
import {strings} from '../../../../common/complicatedComponents/Context';

export const CartonsList = () => {
  const renderItem = useCallback(({item}) => <CartonsItem data={item} />, []);
  const secondaryHeaderConsts = cartonsSecondaryHeaderName(strings);

  return (
    <Block backgroundColor={'white'} flex={1}>
      <SecondaryHeader columName={secondaryHeaderConsts} />
      <Block backgroundColor={'white'} flex={1}>
        <SwipeList data={cartonsData} renderItem={renderItem} />
      </Block>
    </Block>
  );
};
