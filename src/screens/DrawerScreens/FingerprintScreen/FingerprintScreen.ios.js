import React, {useState} from 'react';
import TouchID from 'react-native-touch-id';
import FingerprintIcon from '../../../assets/icons/fingerprint.svg';
import {StyledText} from '../../../common/simpleComponents/Text';
import {Block} from '../../../common/simpleComponents/Block';
import {StyledButton} from '../../../common/simpleComponents/Button';

export const FingerprintScreenIos = () => {
  const [checking, setChecking] = useState(false);
  const [fingerColor, setFingerColor] = useState('gray');
  const optionalConfigObject = {
    fallbackLabel: 'Enter Passcode',
    unifiedErrors: false,
    passcodeFallback: true,
  };
  const readFingerprint = () => {
    setFingerColor('blue');
    setChecking(true);
    TouchID.authenticate('', optionalConfigObject)
      .then(success => {
        setFingerColor('green');
        setChecking(false);
      })
      .catch(error => {
        console.log(error.message);
        setFingerColor('red');
        setChecking(false);
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
