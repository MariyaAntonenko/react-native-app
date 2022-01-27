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
    {
      id: 6,
      label: strings.screens.signature,
    },
    {
      id: 7,
      label: strings.screens.modal,
    },
    {
      id: 8,
      label: strings.screens.webview,
    },
    {
      id: 9,
      label: strings.screens.map,
    },
    {
      id: 10,
      label: strings.screens.camera,
    },
    {
      id: 11,
      label: strings.screens.fingerprint,
    },
    {
      id: 12,
      label: strings.screens.flashmessage,
    },
    {
      id: 13,
      label: strings.screens.download,
    },
    {
      id: 14,
      label: strings.screens.audio,
    },
    {
      id: 15,
      label: strings.screens.qr,
    },
    {
      id: 16,
      label: strings.screens.push,
    },
    {
      id: 17,
      label: strings.screens.gps,
    },
    {
      id: 18,
      label: strings.screens.date,
    },
    {
      id: 19,
      label: strings.screens.accelerometer,
    },
  ];
};
export const loginFormConsts = [
  {
    id: 1,
    label: 'username',
    hasShowPasswordIcon: false,
    isPassword: false,
  },
  {
    id: 2,
    marginTop: '10%',
    label: 'password',
    hasShowPasswordIcon: true,
    isPassword: true,
  },
];
export const markersConsts = [
  {
    id: 1,
    title: 'New York',
    coordinate: {
      latitude: 47.8328,
      longitude: 35.131,
    },
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Statue_of_liberty_01.jpg',
    content:
      'ducimus eaque error est fuga maxime quaerat quisquam repudiandae? lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit.Culpa deleniti error est in neque possimus similique. Architecto at,',
  },
  {
    id: 2,
    title: 'Paris',
    coordinate: {
      latitude: 47.8358,
      longitude: 35.121,
    },
    url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2017%2F02%2Feiffel-tower-paris-france-EIFFEL0217.jpg',
    content:
      'lorem Lorem ipsum ldldl,d,d,,d,d,d,d,,d,d,d,d,d,,,d,,d,d,d,d,d,lkmflkmflksmfclksmfc`klsfm`klafmkla`mf`lksmfc`klsf`klsf`klfsmd,fksd,.nm,dfsmfmndggggggggdhahbdahbhabahbahbjh dolor sit amet ,consectetur adipisicing elit. Culpa deleniti error est in nequepossimus similique. Architecto at, consequatur delectus dignissimos ducimus eaque error est fuga maxime quaerat quisquam repudiandae? lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deleniti error est in neque possimus similique. Architecto at, consequatur delectus dignissimos ducimus eaque error est fuga maxime quaerat quisquam repudiandae?',
  },
  {
    id: 3,
    title: 'Pisa',
    coordinate: {
      latitude: 47.831,
      longitude: 35.141,
    },
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/66/The_Leaning_Tower_of_Pisa_SB.jpeg',
    content: 'lorem Lorem ipsumconsequatur ',
  },
  {
    id: 4,
    title: 'Moscow',
    coordinate: {
      latitude: 47.844,
      longitude: 35.146,
    },
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Moscow_StBasilCathedral_d28.jpg',
    content: 'lorem Lorem ipsumconsequatur ',
  },
  {
    id: 5,
    title: 'Tokio',
    coordinate: {
      latitude: 47.8442,
      longitude: 35.13,
    },
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg',
    content: 'lorem Lorem ipsumconsequatur ',
  },
  {
    id: 6,
    title: 'Dubai',
    coordinate: {
      latitude: 47.853,
      longitude: 35.111,
    },
    url: 'https://upload.wikimedia.org/wikipedia/en/9/93/Burj_Khalifa.jpg',
    content: 'lorem Lorem ipsumconsequatur ',
  },
];
export const playList = [
  {
    id: '1',
    title: 'Rain',
    artist: 'SFX Producer',
    url: require('../assets/songs/Rain.mp3'),
  },
  {
    id: '2',
    title: 'Ocean',
    artist: 'SFX Producer',
    url: require('../assets/songs/Ocean.mp3'),
  },
  {
    id: '3',
    title: 'Fireworks',
    artist: 'SFX Producer',
    url: require('../assets/songs/Fireworks.mp3'),
  },
];
