import React, {useState} from 'react';
import TouchID from 'react-native-touch-id';
import Fingerprint from '../../../assets/icons/fingerprint.svg';
import {StyledText} from '../../../common/simpleComponents/Text';
import {Block} from '../../../common/simpleComponents/Block';
import {StyledButton} from '../../../common/simpleComponents/Button';
export const FingerprintScreen = () => {
  const [checking, setChecking] = useState(false);
  const [fingerColor, setFingerColor] = useState('gray');
  const optionalConfigObject = {
    title: 'Authentication Required', // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };
  const readFingerprint = () => {
    setFingerColor('blue');
    setChecking(true);
    TouchID.authenticate('To continue work with app')
      .then(success => {
        setChecking(false);
        setFingerColor('green');
      })
      .catch(error => {
        setChecking(false);
        setFingerColor('red');
      });
  };
  return (
    <Block flex={1} alignItems={'center'} justifyContent={'flex-start'}>
      <Block pt={'15%'} pb={'10%'}>
        <Fingerprint width={'100px'} height={'100px'} fill={fingerColor} />
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
        <StyledText color={'black'}>Touch ID</StyledText>
      </StyledButton>
    </Block>
  );
};
