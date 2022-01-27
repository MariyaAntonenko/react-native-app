import React from 'react';
import {Block} from '../../../../../../common/simpleComponents/Block';
import {FooterTabsElem} from './FooterTabsElem';

export const FooterTabs = ({footerTabsConsts}) => {
  return (
    <Block
      flexDirection={'row'}
      justifyContent={'space-around'}
      paddingVertical={'10px'}>
      {footerTabsConsts.map(tab => (
        <FooterTabsElem tab={tab} key={tab.id} />
      ))}
    </Block>
  );
};
