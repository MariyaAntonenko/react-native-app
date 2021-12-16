import React, {useCallback, useContext} from 'react';
import {LocalizationContext} from '../../common/complicatedComponents/Context';
import LanguageIcon from '../../assets/icons/translate.svg';
import {DrawerItem} from '@react-navigation/drawer';
import {drawerItemConsts} from '../../common/consts';
import {SafeAreaView} from '../../common/simpleComponents/SafeAreaView';
import {Block} from '../../common/simpleComponents/Block';
import {StyledButton} from '../../common/simpleComponents/Button';
import {Alert} from 'react-native';

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
    <SafeAreaView>
      <Block alignItems={'center'} padding={'5%'}>
        <StyledButton
          pt={'20px'}
          pr={'20px'}
          pb={'20px'}
          pl={'20px'}
          onPress={onChangeLanguage}>
          <LanguageIcon width={50} height={40} fill={'#3490FD'} />
        </StyledButton>
      </Block>
      <Block>
        {drawerItems.map(item => (
          <DrawerItem
            label={item.label}
            onPress={() => onNavigate(item.label)}
            key={item.id}
          />
        ))}
      </Block>
    </SafeAreaView>
  );
};
