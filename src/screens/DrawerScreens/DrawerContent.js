import React, {useCallback, useContext} from 'react';
import {LocalizationContext} from '../../common/complicatedComponents/Context';
import {ScrollView, StatusBar} from 'react-native';
import LanguageIcon from '../../assets/icons/translate.svg';
import {DrawerItem} from '@react-navigation/drawer';
import {drawerItemConsts} from '../../common/consts';
import {Block} from '../../common/simpleComponents/Block';
import {StyledButton} from '../../common/simpleComponents/Button';
import {Alert} from 'react-native';
import {SafeAreaView} from '../../common/simpleComponents/SafeAreaView';

export const DrawerContent = props => {
  const {strings, setAppLanguage} = useContext(LocalizationContext);
  const onChangeLanguage = () => {
    Alert.alert('Language', 'Please, select your language', [
      {
        text: 'English',
        onPress: () => {
          setAppLanguage('en');
          props.navigation.closeDrawer();
        },
      },
      {
        text: 'Español',
        onPress: () => {
          setAppLanguage('es');
          props.navigation.closeDrawer();
        },
      },
    ]);
  };
  const drawerItems = drawerItemConsts(strings);
  const onNavigate = useCallback(
    screen => props.navigation.navigate(screen),
    [],
  );

  return (
    <SafeAreaView pt={StatusBar.currentHeight} flex={1}>
      <Block alignItems={'center'}>
        <StyledButton padding={'5%'} onPress={onChangeLanguage}>
          <LanguageIcon width={50} height={40} fill={'#3490FD'} />
        </StyledButton>
      </Block>
      <ScrollView style={{flex: 1}}>
        {drawerItems.map(item => (
          <DrawerItem
            label={item.label}
            onPress={() => onNavigate(item.label)}
            key={item.id}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
