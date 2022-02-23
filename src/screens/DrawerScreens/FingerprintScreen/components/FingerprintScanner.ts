import TouchID from 'react-native-touch-id';
import {FingerprintProps} from '../FingerprintScreen';

type ConfigObjectTypes = {
  fallbackLabel: string;
  unifiedErrors: boolean;
  passcodeFallback: boolean;
};

const optionalConfigObject: ConfigObjectTypes = {
  fallbackLabel: 'Enter Passcode',
  unifiedErrors: false,
  passcodeFallback: true,
};
export const readFingerprint = ({
  setFingerColor,
  setChecking,
}: FingerprintProps) => {
  setFingerColor('blue');
  setChecking(true);
  TouchID.authenticate('', optionalConfigObject)
    .then(() => {
      setFingerColor('green');
      setChecking(false);
    })
    .catch((error: {message: any}) => {
      console.log(error.message);
      setFingerColor('red');
      setChecking(false);
    });
};
