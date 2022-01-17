import React from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import {SignatureTabArea} from './SignatureTabs/SignatureTabArea';
import SignatureIcon from '../../../../assets/icons/digital-signature.svg';

export const SignatureScreenHeader = () => {
  return (
    <Block flex={1} alignItems={'center'}>
      <Block padding={'5%'}>
        <SignatureIcon width={100} height={100} />
      </Block>
      <SignatureTabArea />
    </Block>
  );
};
