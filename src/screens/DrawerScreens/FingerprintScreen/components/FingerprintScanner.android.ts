import FingerprintScanner from 'react-native-fingerprint-scanner';
import {FingerprintProps} from '../FingerprintScreen';

export const readFingerprint = ({
  setFingerColor,
  setChecking,
}: FingerprintProps) => {
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
