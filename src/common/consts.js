import React from 'react';
import Bluetooth from '../assets/icons/bluetooth.svg';
import Wifi from '../assets/icons/wifi.svg';
import Cloud from '../assets/icons/cloud.svg';

export const articlesData = [
  {
    id: 1,
    article: '1',
    color: 'White',
    size: 'XS',
    type: 'Longsleeve Women X',
    img: './assets/images/articlesImg.png',
    amount: 3,
  },
  {
    id: 2,
    article: '2',
    color: 'White',
    size: 'S',
    type: 'Longsleeve Women Y',
    img: './assets/images/articlesImg.png',
    amount: 3,
  },
  {
    id: 3,
    article: '3',
    color: 'White',
    size: 'Xl',
    type: 'Longsleeve Women Z',
    img: './assets/images/articlesImg.png',
    amount: 3,
  },
  {
    id: 4,
    article: '4',
    color: 'White',
    size: 'S',
    type: 'Longsleeve Women Y',
    img: './assets/images/articlesImg.png',
    amount: 3,
  },
  {
    id: 5,
    article: '5',
    color: 'White',
    size: 'Xl',
    type: 'Longsleeve Women Z',
    img: './assets/images/articlesImg.png',
    amount: 3,
  },
  {
    id: 6,
    article: '6',
    color: 'White',
    size: 'S',
    type: 'Longsleeve Women Y',
    img: './assets/images/articlesImg.png',
    amount: 3,
  },
  {
    id: 7,
    article: '7',
    color: 'White',
    size: 'Xl',
    type: 'Longsleeve Women Z',
    img: './assets/images/articlesImg.png',
    amount: 3,
  },
  {
    id: 8,
    article: '8',
    color: 'White',
    size: 'S',
    type: 'Longsleeve Women Y',
    img: './assets/images/articlesImg.png',
    amount: 3,
  },
  {
    id: 9,
    article: '9',
    color: 'White',
    size: 'Xl',
    type: 'Longsleeve Women Z',
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

export const headerConstsForArticlesScreen = [
  {
    id: 1,
    Icon: () => <Bluetooth width={50} height={40} fill={'#000'} />,
    extraText: '100%',
    label: 'Cancel',
    clickable: true,
  },
  {
    id: 2,
    Icon: () => <Wifi width={100} height={40} fill={'#000'} />,
    extraText: '',
    label: 'Articles in Carton',
    clickable: false,
  },
  {
    id: 3,
    Icon: () => <Cloud width={60} height={40} fill={'#000'} />,
    extraText: '',
    label: 'Confirm',
    clickable: true,
  },
];

export const headerConstsForSummaryScreen = [
  {
    id: 1,
    Icon: () => <Bluetooth width={50} height={40} fill={'#000'} />,
    extraText: '100%',
    label: 'Cancel',
    clickable: true,
  },
  {
    id: 2,
    Icon: () => <Wifi width={100} height={40} fill={'#000'} />,
    extraText: '',
    label: 'Summary',
    clickable: false,
  },
  {
    id: 3,
    Icon: () => <Cloud width={60} height={40} fill={'#000'} />,
    extraText: '',
    label: 'Prepare',
    clickable: true,
  },
];

export const footerConstsForArticlesScreen = {
  title: 'Pull the trigger to start reading.',
};
export const footerConstsForSummaryScreen = {
  title: 'Pull the trigger to scan a carton barcode.',
};
