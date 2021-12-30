import React, {useState} from 'react';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import FingerprintIcon from '../../../assets/icons/fingerprint.svg';
import {StyledText} from '../../../common/simpleComponents/Text';
import {Block} from '../../../common/simpleComponents/Block';
import {StyledButton} from '../../../common/simpleComponents/Button';

export const FingerprintScreenAndroid = () => {
  const [checking, setChecking] = useState(false);
  const [fingerColor, setFingerColor] = useState('gray');
  const readFingerprint = () => {
    setFingerColor('blue');
    setChecking(true);
    FingerprintScanner.authenticate({
      description: 'Scan your fingerprint',
      fallbackEnabled: true,
    })
      .then(() => {
        setFingerColor('green');
        setChecking(false);
        FingerprintScanner.release();
      })
      .catch(error => {
        console.log(error.message);
        setFingerColor('red');
        setChecking(false);
        FingerprintScanner.release();
      });
  };
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
        onPress={readFingerprint}
        border={'0.5px solid gray'}
        borderRadius={'6px'}
        padding={'5%'}>
        <StyledText color={'black'}>Touch to start scanning</StyledText>
      </StyledButton>
    </Block>
  );
};
