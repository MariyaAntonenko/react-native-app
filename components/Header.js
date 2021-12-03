import React from 'react';
import Box from '../assets/icons/box.svg';
import Coupon from '../assets/icons/coupon.svg';
import {Block} from './styledComponents/Block';
import {StyledText} from './styledComponents/Text';
import {headerConsts} from './headerConsts';
import {HeaderItem} from './HeaderItem';
import {SegmentControls} from './SegmentTab';

export const Header = ({amount}) => {
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
          backgroundColor={'#dadde0'}
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
              {amount}
            </StyledText>
            <Coupon width={30} height={30} fill={'#000'} />
            <StyledText
              fontSize={'10px'}
              color={'black'}
              fontWeight={'300'}
              mr={'5px'}>
              {amount}
            </StyledText>
          </Block>
        </Block>
        <SegmentControls />
        <Block
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
            ARTICLE NO.
          </StyledText>
          <StyledText fontSize={'15px'} color={'gray'} fontWeight={'400'}>
            ACT.
          </StyledText>
        </Block>
      </Block>
    </Block>
  );
};
