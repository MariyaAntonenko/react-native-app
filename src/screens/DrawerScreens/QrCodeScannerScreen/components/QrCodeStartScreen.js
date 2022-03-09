import React from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import {StyledButton} from '../../../../common/simpleComponents/Button';
import QrCodeIcon from '../../../../assets/icons/qr-code.svg';
import {StyledText} from '../../../../common/simpleComponents/Text';

export const QrCodeStartScreen = ({startScan}) => {
  return (
    <Block alignItems={'center'} justifyContent={'center'}>
      <StyledButton onPress={startScan} alignItems={'center'}>
        <Block
          paddingHorizontal={'15px'}
          paddingVertical={'15px'}
          backgroundColor={'white'}
          borderRadius={'9px'}
          marginVertical={'15px'}>
          <QrCodeIcon width={'120px'} height={'120px'} fill={'black'} />
        </Block>
        <StyledText color={'white'} fontSize={'15px'}>
          Start scanning
        </StyledText>
      </StyledButton>
    </Block>
  );
};
