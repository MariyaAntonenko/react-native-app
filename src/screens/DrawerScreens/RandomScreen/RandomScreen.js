import React, {useState, useEffect} from 'react';
import {Header} from '../../../common/complicatedComponents/Header/Header';
import {
  headerConstsForRandomPage,
  footerConstsForArticlesScreen,
} from '../../../common/consts';
import {RandomScreenContent} from './components/RandomScreenContent';
import {Footer} from '../../../common/complicatedComponents/Footer/Footer';
import {Block} from '../../../common/simpleComponents/Block';
import {ErrorButton} from './components/ErrorButton';

const useErrButton = setErrButton => {
  const [randomValue, setRandomValue] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      let value = Math.random() > 0.5 ? 1 : 2;
      if (value === 1) {
        setRandomValue(randomValue + 1);
        setErrButton(false);
      } else if (value === 2) {
        setRandomValue(randomValue);

        setErrButton(true);
      }
    }, 500);
  });

  return randomValue;
};

export const RandomScreen = () => {
  const [isErrButton, setErrButton] = useState(false);
  const {randomValue} = useErrButton(setErrButton);
  const handleRandomValue = () => {};
  return (
    <Block pt={'10%'} mb={'5%'} flex={1} backgroundColor={'#013555'}>
      <Header headerConsts={headerConstsForRandomPage} />
      <RandomScreenContent
        handleRandomValue={handleRandomValue}
        randomValue={randomValue}
      />
      {isErrButton ? (
        <ErrorButton />
      ) : (
        <Footer footerConst={footerConstsForArticlesScreen} />
      )}
    </Block>
  );
};
