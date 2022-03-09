import React from 'react';
import {Header} from '../../../common/complicatedComponents/Header/Header';
import {SafeAreaView} from '../../../common/simpleComponents/SafeAreaView';
import {ArticlesList} from './components/ArticlesList';
import {Footer} from '../../../common/complicatedComponents/Footer/Footer';
import {
  headerConstsForArticlesScreen,
  footerConstsForArticlesScreen,
} from '../../../common/consts';
import {strings} from '../../../common/complicatedComponents/Context';
import {StatusBar} from 'react-native';

export const ArticlesScreen = () => {
  const headerConsts = headerConstsForArticlesScreen(strings);
  const footerConsts = footerConstsForArticlesScreen(strings);
  return (
    <SafeAreaView
      pt={StatusBar.currentHeight}
      flex={1}
      backgroundColor={'white'}>
      <Header headerConsts={headerConsts} />
      <ArticlesList />
      <Footer footerConst={footerConsts} />
    </SafeAreaView>
  );
};
