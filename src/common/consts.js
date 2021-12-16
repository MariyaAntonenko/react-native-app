import React from 'react';
import Bluetooth from '../assets/icons/bluetooth.svg';
import Wifi from '../assets/icons/wifi.svg';
import Cloud from '../assets/icons/cloud.svg';
import {strings} from './complicatedComponents/Context';

export const articlesData = [
  {
    id: 1,
    article: '1',
    color: strings.articles.itemColor,
    size: 'XS',
    type: `${strings.articles.typeDescription} X`,
    img: './assets/images/articlesImg.png',
    amount: 3,
  },
  {
    id: 2,
    article: '2',
    color: strings.articles.itemColor,
    size: 'S',
    type: `${strings.articles.typeDescription} Y`,
    img: './assets/images/articlesImg.png',
    amount: 3,
  },
  {
    id: 3,
    article: '3',
    color: strings.articles.itemColor,
    size: 'Xl',
    type: `${strings.articles.typeDescription} Z`,
    img: './assets/images/articlesImg.png',
    amount: 3,
  },
  {
    id: 4,
    article: '4',
    color: strings.articles.itemColor,
    size: 'S',
    type: `${strings.articles.typeDescription} X`,
    img: './assets/images/articlesImg.png',
    amount: 3,
  },
];
export const articlesAmount = articlesData
  .map(el => el.amount)
  .reduce((el, acc) => el + acc);

export const cartonsData = [
  {
    id: 1,
    article: '2528374892398456774482',
    amount: 9,
  },
  {
    id: 2,
    article: '462462642732342234234',
    amount: 9,
  },
  {
    id: 3,
    article: '5374327847283462342323',
    amount: 9,
  },
  {
    id: 4,
    article: '5374327847283462342333',
    amount: 9,
  },
];
export const cartonsAmount = cartonsData
  .map(el => el.amount)
  .reduce((el, acc) => el + acc);

export const headerConstsForArticlesScreen = strings => {
  return [
    {
      id: 1,
      Icon: () => <Bluetooth width={50} height={40} fill={'#000'} />,
      extraText: '100%',
      extraTextColor: 'black',
      label: strings.articles.cancelButton,
      clickable: true,
      textColor: '#3490FD',
    },
    {
      id: 2,
      Icon: () => <Wifi width={100} height={40} fill={'#000'} />,
      extraText: '',
      label: strings.articles.headerTitle,
      clickable: false,
      textColor: 'black',
    },
    {
      id: 3,
      Icon: () => <Cloud width={60} height={40} fill={'#000'} />,
      extraText: '',
      label: strings.articles.confirmButton,
      clickable: true,
      textColor: '#3490FD',
    },
  ];
};

export const headerConstsForRandomPage = [
  {
    id: 1,
    Icon: () => <Bluetooth width={50} height={40} fill={'#fff'} />,
    extraText: '100%',
    extraTextColor: 'white',
    label: 'Back',
    clickable: true,
    textColor: 'white',
  },
  {
    id: 2,
    Icon: () => <Wifi width={100} height={40} fill={'#ffff'} />,
    extraText: '',
    label: 'Articles in Carton',
    clickable: false,
    textColor: 'white',
  },
  {
    id: 3,
    Icon: () => <Cloud width={60} height={40} fill={'#fff'} />,
    extraText: '',
    label: 'Confirm',
    clickable: true,
    textColor: 'white',
  },
];
export const headerConstsForSummaryScreen = strings => {
  return [
    {
      id: 1,
      Icon: () => <Bluetooth width={50} height={40} fill={'#000'} />,
      extraText: '100%',
      extraTextColor: 'black',
      label: strings.summary.cancelButton,
      clickable: true,
      textColor: '#3490FD',
    },
    {
      id: 2,
      Icon: () => <Wifi width={100} height={40} fill={'#000'} />,
      extraText: '',
      label: strings.summary.headerTitle,
      clickable: false,
      textColor: 'black',
    },
    {
      id: 3,
      Icon: () => <Cloud width={60} height={40} fill={'#000'} />,
      extraText: '',
      label: strings.summary.prepareButton,
      clickable: true,
      textColor: '#3490FD',
    },
  ];
};

export const articlesSecondaryHeaderName = strings => {
  return strings.articles.articlesSecondaryHeaderName;
};
export const cartonsSecondaryHeaderName = strings => {
  return strings.summary.cartonsSecondaryHeaderName;
};

export const footerConstsForArticlesScreen = strings =>
  strings.articles.footerButtonText;

export const footerConstsForSummaryScreen = strings =>
  strings.summary.footerButtonText;

export const drawerItemConsts = strings => {
  return [
    {
      id: 1,
      label: strings.screens.articles,
    },
    {
      id: 2,
      label: strings.screens.summary,
    },
    {
      id: 3,
      label: strings.screens.login,
    },
    {
      id: 4,
      label: strings.screens.chart,
    },
    {
      id: 5,
      label: strings.screens.random,
    },
  ];
};
