import React, {useCallback, useEffect, useState} from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import {Image} from '../../../../common/simpleComponents/Image';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyledScrollView} from '../../../../common/simpleComponents/StyledScrollView';

export const MySignatureTabScreen = () => {
  const [signatures, setSignatures] = useState([]);

  const renderSignatures = useCallback(
    () =>
      AsyncStorage.getItem('images')
        .then(res => setSignatures(JSON.parse(res)))
        .catch(error => console.log(error.message)),
    [],
  );

  useEffect(() => {
    renderSignatures();
  }, [signatures]);

  return (
    <Block flex={1} backgroundColor={'wheat'} padding={'5%'}>
      {signatures && (
        <StyledScrollView>
          {signatures.map((item, index) => (
            <Image
              source={{uri: item}}
              height={'100px'}
              width={'100px'}
              key={index}
            />
          ))}
        </StyledScrollView>
      )}
    </Block>
  );
};
