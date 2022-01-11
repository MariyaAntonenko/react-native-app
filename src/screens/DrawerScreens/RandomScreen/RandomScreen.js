import React from 'react';
import {useCounterIncrementer} from './components/hooks/hookForRandomScreen';
import {Header} from '../../../common/complicatedComponents/Header/Header';
import {
  headerConstsForRandomPage,
  footerConstsForArticlesScreen,
} from '../../../common/consts';
import {RandomScreenContent} from './components/RandomScreenContent';
import {Footer} from '../../../common/complicatedComponents/Footer/Footer';
import {Block} from '../../../common/simpleComponents/Block';
import {ErrorButton} from './components/ErrorButton';
import {strings} from '../../../common/complicatedComponents/Context';

const footerConsts = footerConstsForArticlesScreen(strings);

export const RandomScreen = () => {
  const {count, isError} = useCounterIncrementer();
  return (
    <Block pt={'10%'} flex={1} backgroundColor={'#013555'}>
      <Header headerConsts={headerConstsForRandomPage} />
      <RandomScreenContent count={count} />
      {isError ? <ErrorButton /> : <Footer footerConst={footerConsts} />}
    </Block>
  );
};
