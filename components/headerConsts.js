import React from 'react';
import Bluetooth from '../assets/icons/bluetooth.svg';
import Wifi from '../assets/icons/wifi.svg';
import Cloud from '../assets/icons/cloud.svg';

export const headerConsts = [
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
