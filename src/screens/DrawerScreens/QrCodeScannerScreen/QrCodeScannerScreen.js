import React, {useState} from 'react';
import {Block} from '../../../common/simpleComponents/Block';
import {QrCodeScanner} from './components/QrCodeScanner';
import {QrCodeStartScreen} from './components/QrCodeStartScreen';
import {QrCodeResultScreen} from './components/QrCodeResultScreen';

const urlRegex =
  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

export const QrCodeScannerScreen = () => {
  const [scan, setScan] = useState(false);
  const [result, setResult] = useState();
  const isValidCode = urlRegex.test(result);
  const onSuccess = e => {
    setResult(e.data);
    setScan(false);
  };
  const startScan = () => {
    setScan(true);
    setResult();
  };
  const cancelScan = () => {
    setScan(false);
  };
  const onNavigationStateChange = () => {
    setResult(false);
  };
  return (
    <Block
      flex={1}
      backgroundColor={'black'}
      justifyContent={'center'}
      alignItems={'center'}>
      {result && (
        <QrCodeResultScreen
          result={result}
          isValidCode={isValidCode}
          onNavigationStateChange={onNavigationStateChange}
        />
      )}
      {!scan && !result && <QrCodeStartScreen startScan={startScan} />}
      {scan && <QrCodeScanner onSuccess={onSuccess} cancelScan={cancelScan} />}
    </Block>
  );
};
