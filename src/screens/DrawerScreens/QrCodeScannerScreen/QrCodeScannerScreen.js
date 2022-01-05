import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {AppRegistry, Linking} from 'react-native';
import {StyledText} from '../../../common/simpleComponents/Text';
import {Block} from '../../../common/simpleComponents/Block';
import {StyledButton} from '../../../common/simpleComponents/Button';

export const QrCodeScannerScreen = () => {
  const onSuccess = e => {
    Linking.openURL(e.data).catch(
      err => console.error('An error occured', err),
      scanner.reactivate(),
    );
  };
  return (
    <Block flex={1} backgroundColor={'black'}>
      <QRCodeScanner
        onRead={onSuccess}
        ref={node => {
          this.scanner = node;
        }}
        cameraStyle={{
          // height: 200,
          // marginTop: 20,
          // width: 200,
          alignSelf: 'center',
          justifyContent: 'center',
        }}
        reactivate
        reactivateTimeout={3000}
        // customMarker={<Block border={'1px solid gray'}></Block>}
        containerStyle={{marginTop: 10}}
        showMarker
        flashMode={RNCamera.Constants.FlashMode.auto}
        topContent={
          <StyledText color={'white'} fontSize={'20px'}>
            Please, scan your QR-code
          </StyledText>
        }
        bottomContent={
          <StyledButton>
            <StyledText color={'#424242'} fontSize={'30px'}>
              Got it!
            </StyledText>
          </StyledButton>
        }
      />
    </Block>
  );
};
