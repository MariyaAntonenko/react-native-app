import React from 'react';
import Wifi from '../../../../assets/icons/wifi.svg';
import {Block} from '../../../../common/simpleComponents/Block';
import {StyledText} from '../../../../common/simpleComponents/Text';

export const RandomScreenContent = ({randomValue, handleRandomValue}) => {
  return (
    <Block
      flex={1}
      backgroundColor={'white'}
      justifyContent={'space-around'}
      alignItems={'center'}>
      <StyledText fontSize={'150px'} color={'#013555'}>
        {randomValue}
      </StyledText>
      <Wifi width={200} height={200} onPress={handleRandomValue} />
    </Block>
  );
};
