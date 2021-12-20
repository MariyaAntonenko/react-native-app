import React, {createRef, useState} from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import SignatureCapture from 'react-native-signature-capture';
import {SignatureSaveButton} from './SignatureSaveButton';
import {SignatureResetButton} from './SignatureResetButton';
import RNFS from 'react-native-fs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {img} from 'react-native/Libraries/Animated/AnimatedWeb';

export const CreateTabScreen = () => {
  const [signatures, setSignatures] = useState({signature: ''});

  const path = RNFS.DocumentDirectoryPath + '/signature.png';

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
    alert('Signature Captured Successfully');
    let imgData = result.encoded;
    imgData.split('data:image/png;base64,');
    // imgData = imgData[1];
    console.log(imgData);
    AsyncStorage.setItem('sign', imgData);
    //   RNFS.writeFile(path, imgData, 'base64')
    //     .then(res => console.log('Done!!!'))
    //     .catch(error => console.log(error.message));
  };
  // console.log(signatures);

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
