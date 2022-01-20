import React from 'react';
import FingerprintScanner from 'react-native-fingerprint-scanner';

export const readFingerprint = ({setFingerColor, setChecking}) => {
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
