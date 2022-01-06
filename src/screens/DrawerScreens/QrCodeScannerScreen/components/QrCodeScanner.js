import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';
import {RNCamera} from 'react-native-camera';
import {StyledText} from '../../../../common/simpleComponents/Text';
import {StyledButton} from '../../../../common/simpleComponents/Button';

export const QrCodeScanner = ({onSuccess, cancelScan}) => {
  return (
    <QRCodeScanner
      cameraStyle={{}}
      cameraProps={{
        rectOfInterest: {x: 0.25, y: 0.25, width: 0.5, height: 0.5},
        cameraViewDimensions: {width: 100, height: 100},
      }}
      onRead={onSuccess}
      reactivate
      customMarker={
        <BarcodeMask
          outerMaskOpacity={0}
          edgeColor={'#009FDA'}
          animatedLineColor={'#009FDA'}
          lineAnimationDuration={2000}
        />
      }
      showMarker
      flashMode={RNCamera.Constants.FlashMode.auto}
      topContent={
        <StyledText color={'white'} fontSize={'20px'}>
          Please, scan your QR-code
        </StyledText>
      }
      bottomContent={
        <StyledButton>
          <StyledText onPress={cancelScan} color={'#424242'} fontSize={'30px'}>
            Cancel scanning
          </StyledText>
        </StyledButton>
      }
    />
  );
};
