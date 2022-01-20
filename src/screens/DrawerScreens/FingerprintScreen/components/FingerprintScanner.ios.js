import React from 'react';
import TouchID from 'react-native-touch-id';

const optionalConfigObject = {
  fallbackLabel: 'Enter Passcode',
  unifiedErrors: false,
  passcodeFallback: true,
};
export const readFingerprint = ({setFingerColor, setChecking}) => {
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
