import React, {useState, useEffect, useMemo} from 'react';
import {Header} from '../../../common/complicatedComponents/Header/Header';
import {
  headerConstsForRandomPage,
  footerConstsForArticlesScreen,
} from '../../../common/consts';
import {RandomScreenContent} from './components/RandomScreenContent';
import {Footer} from '../../../common/complicatedComponents/Footer/Footer';
import {Block} from '../../../common/simpleComponents/Block';
import {ErrorButton} from './components/ErrorButton';

const useCounterIncrementer = () => {
  const [count, setCount] = useState(0);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      let value = Math.random() > 0.5;
      if (value) {
        setCount(prev => prev + 1);
      }
      setError(!value);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const value = useMemo(() => ({count, isError}), [count, isError]);

  return value;
};

export const RandomScreen = () => {
  const {count, isError} = useCounterIncrementer();
  return (
    <Block pt={'10%'} mb={'5%'} flex={1} backgroundColor={'#013555'}>
      <Header headerConsts={headerConstsForRandomPage} />
      <RandomScreenContent count={count} />
      {isError ? (
        <ErrorButton />
      ) : (
        <Footer footerConst={footerConstsForArticlesScreen} />
      )}
    </Block>
  );
};
