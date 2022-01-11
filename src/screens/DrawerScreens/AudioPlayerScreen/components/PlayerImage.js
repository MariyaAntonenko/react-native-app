import React from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import MusicIcon from '../../../../assets/icons/musicIcon.svg';

export const PlayerImage = () => {
  return (
    <Block
      border={'0.5px solid blue'}
      borderRadius={'9px'}
      paddingVertical={'70px'}
      paddingHorizontal={'60px'}>
      <MusicIcon width={'200px'} height={'200px'} />
    </Block>
  );
};
