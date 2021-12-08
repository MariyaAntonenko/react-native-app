import React from 'react';
import Box from '../../../assets/icons/box.svg';
import Coupon from '../../../assets/icons/coupon.svg';
import {Block} from '../../simpleComponents/Block';
import {StyledText} from '../../simpleComponents/Text';
import {HeaderItem} from './HeaderItem';
import {articlesAmount, cartonsAmount} from '../../consts';

export const Header = ({headerConsts}) => {
  return (
    <Block mt={'15px'}>
      <Block
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-between'}>
        {headerConsts.map(itemData => (
          <HeaderItem {...itemData} key={itemData.id} />
        ))}
      </Block>
      <Block>
        <Block
          backgroundColor={'#E1E1E1'}
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          mt={'10px'}
          pt={'5px'}
          pb={'5px'}
          pl={'5px'}
          pr={'5px'}
          borderTopColor={'gray'}
          borderTopStyle={'solid'}
          borderTopWidth={'0.5px'}>
          <Block display={'flex'} flexDirection={'row'} alignItems={'center'}>
            <StyledText ml={'5px'} color={'gray'} fontWeight={'700'}>
              2601-LAS VEGAS (TST)"
            </StyledText>
          </Block>
          <Block display={'flex'} flexDirection={'row'} alignItems={'center'}>
            <Box width={15} height={20} fill={'#000'} />
            <StyledText
              fontSize={'10px'}
              color={'black'}
              fontWeight={'300'}
              mr={'10px'}
              ml={'5px'}>
              {cartonsAmount}
            </StyledText>
            <Coupon width={30} height={30} fill={'#000'} />
            <StyledText
              fontSize={'10px'}
              color={'black'}
              fontWeight={'300'}
              mr={'5px'}>
              {articlesAmount}
            </StyledText>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};
