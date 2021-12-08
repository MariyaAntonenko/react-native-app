import React from 'react';
import {Header} from '../../../common/complicatedComponents/Header/Header';
import {SafeAreaView} from '../../../common/simpleComponents/SafeAreaView';
import {ArticlesList} from './components/ArticlesList';
import {Footer} from '../../../common/complicatedComponents/Footer/Footer';
import {
  headerConstsForArticlesScreen,
  footerConstsForArticlesScreen,
} from '../../../common/consts';

export const ArticlesScreen = () => {
  return (
    <SafeAreaView flex={1}>
      <Header headerConsts={headerConstsForArticlesScreen} />
      <ArticlesList />
      <Footer footerConst={footerConstsForArticlesScreen} />
    </SafeAreaView>
  );
};
