import React from 'react';
import {Header} from '../../../common/complicatedComponents/Header/Header';
import {SafeAreaView} from '../../../common/simpleComponents/SafeAreaView';
import {Footer} from '../../../common/complicatedComponents/Footer/Footer';
import {TabsArea} from './components/Tabs/TabsArea';
import {
  headerConstsForSummaryScreen,
  footerConstsForSummaryScreen,
} from '../../../common/consts';
import {strings} from '../../../common/complicatedComponents/Context';

export const SummaryScreen = () => {
  const headerConsts = headerConstsForSummaryScreen(strings);
  const footerConsts = footerConstsForSummaryScreen(strings);
  return (
    <SafeAreaView backgroundColor={'white'} flex={1}>
      <Header headerConsts={headerConsts} />
      <TabsArea />
      <Footer footerConst={footerConsts} />
    </SafeAreaView>
  );
};
