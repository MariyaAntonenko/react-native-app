import React, {useState, useCallback} from 'react';
import FingerprintIcon from '../../../assets/icons/fingerprint.svg';
import {StyledText} from '../../../common/simpleComponents/Text';
import {Block} from '../../../common/simpleComponents/Block';
import {StyledButton} from '../../../common/simpleComponents/Button';
import {readFingerprint} from './components/FingerprintScanner';

export type FingerprintProps = {
  setFingerColor: (arg0: string) => string;
  setChecking: (arg0: boolean) => boolean;
};

export const FingerprintScreen = () => {
  const [checking, setChecking] = useState<boolean>(false);
  const [fingerColor, setFingerColor] = useState<string>('gray');

  const onReadFingerFunction = useCallback(
    () => readFingerprint({setChecking, setFingerColor} as FingerprintProps),
    [],
  );
  return (
    <Block flex={1} alignItems={'center'} justifyContent={'flex-start'}>
      <Block paddingVertical={'50px'}>
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
        paddingVertical={'20px'}
        paddingHorizontal={'15px'}>
        <StyledText color={'black'}>Touch to start scanning</StyledText>
      </StyledButton>
    </Block>
  );
};
