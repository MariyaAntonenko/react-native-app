import React from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import SignatureCapture from 'react-native-signature-capture';
import {SignatureSaveButton} from './SignatureSaveButton';
import {SignatureResetButton} from './SignatureResetButton';

export const CreateTabScreen = () => {
  return (
    <Block flex={1} backgroundColor={'wheat'} padding={'5%'}>
      <SignatureCapture
        showNativeButtons={false}
        showTitleLabel={false}
        backgroundColor={'transparent'}
        flex={1}
        minStrokeWidth={4}
        maxStrokeWidth={4}
        viewMode={'portrait'}
      />
      <Block
        padding={'5%'}
        flexDirection={'row'}
        justifyContent={'space-around'}
        alignItems={'center'}>
        <SignatureResetButton />
        <SignatureSaveButton />
      </Block>
    </Block>
  );
};
