import React from 'react';
import {Header} from '../../../common/complicatedComponents/Header/Header';
import {SafeAreaView} from '../../../common/simpleComponents/SafeAreaView';
import {Footer} from '../../../common/complicatedComponents/Footer/Footer';
import {TabsArea} from './components/Tabs/TabsArea';
import {
  headerConstsForSummaryScreen,
  footerConstsForSummaryScreen,
} from '../../../common/consts';

export const SummaryScreen = () => {
  return (
    <SafeAreaView backgroundColor={'white'} flex={1}>
      <Header headerConsts={headerConstsForSummaryScreen} />
      <TabsArea />
      <Footer footerConst={footerConstsForSummaryScreen} />
    </SafeAreaView>
  );
};
