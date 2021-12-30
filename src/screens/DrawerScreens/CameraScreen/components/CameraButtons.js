import React from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import {StyledButton} from '../../../../common/simpleComponents/Button';
import RotateCamera from '../../../../assets/icons/rotateCamera.svg';
import Snap from '../../../../assets/icons/snapCamera.svg';
import FlashOn from '../../../../assets/icons/flashOn.svg';
import FlashOff from '../../../../assets/icons/flashOff.svg';
import FlashTorch from '../../../../assets/icons/flashTorch.svg';
import FlashAuto from '../../../../assets/icons/flashAuto.svg';

export const CameraButtons = ({
  flash,
  toggleFacing,
  captureHandle,
  toggleFlash,
}) => {
  return (
    <Block
      pt={'10%'}
      flexDirection={'row'}
      justifyContent={'space-around'}
      alignItems={'center'}>
      <StyledButton onPress={toggleFacing}>
        <RotateCamera width={'30px'} height={'30px'} fill={'gray'} />
      </StyledButton>
      <StyledButton onPress={captureHandle}>
        <Snap width={'60px'} height={'60px'} fill={'gray'} />
      </StyledButton>
      <StyledButton onPress={toggleFlash}>
        {flash === 'on' && (
          <FlashOn width={'30px'} height={'30px'} fill={'gray'} />
        )}
        {flash === 'off' && (
          <FlashOff width={'30px'} height={'30px'} fill={'gray'} />
        )}
        {flash === 'torch' && (
          <FlashTorch width={'30px'} height={'30px'} fill={'gray'} />
        )}
        {flash === 'auto' && (
          <FlashAuto width={'30px'} height={'30px'} fill={'gray'} />
        )}
      </StyledButton>
    </Block>
  );
};
