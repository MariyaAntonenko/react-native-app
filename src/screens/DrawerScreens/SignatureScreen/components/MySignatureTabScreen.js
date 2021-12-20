import React, {useEffect, useState} from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import {Image} from '../../../../common/simpleComponents/Image';
import RNFS from 'react-native-fs';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const MySignatureTabScreen = () => {
  const path = RNFS.DocumentDirectoryPath + '/signature.png';

  const storeSign = async () => {
    await AsyncStorage.getItem('sign')
      .then(res => console.log(res))
      .catch(error => console.log(error.message));
  };
  const sign = storeSign();
  console.log(sign);
  // useEffect(() => {
  // RNFS.readdir(RNFS.DocumentDirectoryPath)
  //   .then(contents => {
  //     console.log(contents);
  //   })
  //   .catch(err => {
  //     console.log(err.message, err.code);
  //   });
  // }, []);

  return (
    <Block flex={1} backgroundColor={'wheat'} padding={'5%'}>
      <ScrollView>
        <Block>
          <Image source={{uri: path}} height={'100px'} width={'100px'} />
        </Block>
      </ScrollView>
    </Block>
  );
};
