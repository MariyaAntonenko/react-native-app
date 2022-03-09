import React, {useEffect, useState, useCallback} from 'react';
import {debounce} from 'lodash';
import {StyledText} from '../../../common/simpleComponents/Text';
import {SafeAreaView} from '../../../common/simpleComponents/SafeAreaView';
import {Input} from '../../../common/simpleComponents/Input';
import {Block} from '../../../common/simpleComponents/Block';
import axios from 'axios';
import {StyledScrollView} from '../../../common/simpleComponents/StyledScrollView';

export const InputScreen = () => {
  const [countryList, setCountryList] = useState([]);
  const [value, setValue] = useState('');
  const onChangeText = useCallback(text => {
    setValue(text);
  }, []);

  const getCountryList = value => {
    if (value === '') {
      return;
    }
    axios
      .get(`https://restcountries.com/v3.1/name/${value}`)
      .then(response => setCountryList(response.data))
      .catch(err => console.log(err));
  };
  const delayedQuery = useCallback(
    debounce(query => getCountryList(query), 300),
    [],
  );
  useEffect(() => {
    setValue(value);
  }, [value]);

  useEffect(() => {
    delayedQuery(value);
  }, [value, delayedQuery]);

  return (
    <SafeAreaView
      backgroundColor={'black'}
      flex={1}
      alignItems={'center'}
      justifyContent={'center'}>
      <Block
        backgroundColor={'gray'}
        borderRadius={'9px'}
        marginVertical={'20px'}>
        <Input
          value={value}
          onChangeText={onChangeText}
          width={'300px'}
          placeholder={'Type something...'}
          placeholderTextColor={'white'}
          paddingVertical={'20px'}
          paddingHorizontal={'20px'}
        />
      </Block>
      <StyledScrollView contentContainerStyle={{alignItems: 'center'}}>
        {countryList.map(country => (
          <StyledText fontSize={'20px'} color={'white'} key={country.cca2}>
            {country.name.common}
          </StyledText>
        ))}
      </StyledScrollView>
    </SafeAreaView>
  );
};
