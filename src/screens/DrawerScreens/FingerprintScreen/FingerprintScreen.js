import React, {useState, useCallback} from 'react';
import FingerprintIcon from '../../../assets/icons/fingerprint.svg';
import {StyledText} from '../../../common/simpleComponents/Text';
import {Block} from '../../../common/simpleComponents/Block';
import {StyledButton} from '../../../common/simpleComponents/Button';
import {readFingerprint} from './components/FingerprintScanner';

export const FingerprintScreen = () => {
  const [checking, setChecking] = useState(false);
  const [fingerColor, setFingerColor] = useState('gray');
  const onReadFingerFunction = useCallback(
    () => readFingerprint({setChecking, setFingerColor}),
    [],
  );
  return (
    <Block flex={1} alignItems={'center'} justifyContent={'flex-start'}>
      <Block pt={'15%'} pb={'10%'}>
        <FingerprintIcon width={'100px'} height={'100px'} fill={fingerColor} />
        {checking && (
          <StyledText color={'blue'} fontSize={'15px'}>
            Start scanning...
          </StyledText>
        )}
      </Block>
      <StyledButton
        onPress={onReadFingerFunction}
        border={'0.5px solid gray'}
        borderRadius={'6px'}
        padding={'5%'}>
        <StyledText color={'black'}>Touch to start scanning</StyledText>
      </StyledButton>
    </Block>
  );
};
