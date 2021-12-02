import React from 'react';
import Bluetooth from '../assets/icons/bluetooth.svg';
import Wifi from '../assets/icons/wifi.svg';
import Cloud from '../assets/icons/cloud.svg';
import Box from '../assets/icons/box.svg';
import Coupon from '../assets/icons/coupon.svg';
import {
  StyledView,
  Block,
  CartArea,
  CartAreaItems,
} from './styledComponents/Block';
import {StyledText, StyledTitle} from './styledComponents/Text';
import {StyledHeaderButton} from './styledComponents/Button';

export const Header = ({amount}) => {
  return (
    <Block mt={'15px'}>
      <StyledView mb={'15px'} ml={'-7%'} mr={'-7%'}>
        <Bluetooth width={120} height={40} fill={'#000'} />
        <StyledText ml={'-17%'} fz={'22px'} fw={'500'} color={'black'}>
          100%
        </StyledText>
        <Wifi width={120} height={40} fill={'#000'} />
        <Cloud width={120} height={40} fill={'#000'} />
      </StyledView>
      <StyledView mb={'15px'}>
        <StyledHeaderButton>
          <StyledTitle color={'#3490FD'} ml={'5px'}>
            Cancel
          </StyledTitle>
        </StyledHeaderButton>
        <StyledTitle color={'black'}>Articles In Carton</StyledTitle>
        <StyledHeaderButton>
          <StyledTitle color={'#3490FD'} mr={'5px'}>
            Confirm
          </StyledTitle>
        </StyledHeaderButton>
      </StyledView>
      <CartArea>
        <StyledView bg={'#dadde0'} pt={'5px'} pb={'5px'} pl={'5px'} pr={'3px'}>
          <CartAreaItems>
            <Box width={15} height={20} fill={'#000'} />
            <StyledText ml={'5px'} fz={'12px'} color={'gray'} fw={'700'}>
              235167215418356471
            </StyledText>
          </CartAreaItems>
          <CartAreaItems>
            <Coupon width={30} height={30} fill={'#000'} />
            <StyledText fz={'10px'} color={'black'} fw={'300'} mr={'5px'}>
              {amount}
            </StyledText>
          </CartAreaItems>
        </StyledView>
        <StyledView>
          <StyledText
            fz={'15px'}
            color={'gray'}
            fw={'400'}
            mt={'15px'}
            mb={'15px'}
            ml={'30px'}>
            ARTICLE
          </StyledText>
          <StyledText
            fz={'15px'}
            color={'gray'}
            fw={'300'}
            mt={'15px'}
            mb={'15px'}
            mr={'90px'}>
            ACT
          </StyledText>
        </StyledView>
      </CartArea>
    </Block>
  );
};
