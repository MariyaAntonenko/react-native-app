import React, {createRef} from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import SignatureCapture from 'react-native-signature-capture';
import {SignatureSaveButton} from './SignatureSaveButton';
import {SignatureResetButton} from './SignatureResetButton';
import RNFS from 'react-native-fs';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CreateTabScreen = () => {
  const sign = createRef();

  const saveSign = () => {
    sign.current.saveImage();
  };

  const resetSign = () => {
    sign.current.resetImage();
  };
  const _onSaveEvent = result => {
    //result.encoded - for the base64 encoded png
    //result.pathName - for the file path name
    let imgData = result.encoded;
    imgData.split('data:image/png;base64,');
    const timestamp = Date.now();
    try {
      RNFS.copyFile(
        result.pathName,
        RNFS.DocumentDirectoryPath + `/signature${timestamp}.png`,
      )
        .then(res => {
          AsyncStorage.getItem('images').then(res => {
            if (!res) {
              AsyncStorage.setItem(
                'images',
                JSON.stringify([
                  RNFS.DocumentDirectoryPath + `/signature${timestamp}.png`,
                ]),
              );
            } else {
              AsyncStorage.setItem(
                'images',
                JSON.stringify([
                  ...JSON.parse(res),
                  RNFS.DocumentDirectoryPath + `/signature${timestamp}.png`,
                ]),
              );
            }
          });
        })
        .catch(error => {
          console.log('copy error ', error);
        });
    } catch (e) {}
  };
  const _onDragEvent = () => {
    console.log('dragged');
  };
  return (
    <Block flex={1} backgroundColor={'wheat'} padding={'5%'}>
      <Block
        padding={'5%'}
        flexDirection={'row'}
        justifyContent={'space-around'}
        alignItems={'center'}>
        <SignatureResetButton resetSign={resetSign} />
        <SignatureSaveButton saveSign={saveSign} />
      </Block>
      <SignatureCapture
        showNativeButtons={false}
        showTitleLabel={false}
        saveImageFileInExtStorage={true}
        ref={sign}
        onSaveEvent={_onSaveEvent}
        onDragEvent={_onDragEvent}
        backgroundColor={'transparent'}
        flex={1}
        minStrokeWidth={4}
        maxStrokeWidth={4}
        viewMode={'portrait'}
      />
    </Block>
  );
};
