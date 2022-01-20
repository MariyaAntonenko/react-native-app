import React from 'react';
import {showMessage} from 'react-native-flash-message';
import {Block} from '../../../common/simpleComponents/Block';
import {StyledText} from '../../../common/simpleComponents/Text';
import {StyledButton} from '../../../common/simpleComponents/Button';
import {Alert} from 'react-native';

export const FlashMessageScreen = () => {
  const onShowFlashMessage = () => {
    setTimeout(() => {
      showMessage({
        message: 'You are successful!',
        type: 'success',
        onLongPress: () => {
          Alert.alert('Your cat is awesome!');
        },
      });
    }, 1000);
  };
  return (
    <Block
      flex={1}
      backgroundColor={'pink'}
      justifyContent={'center'}
      alignItems={'center'}>
      <StyledButton
        onPress={onShowFlashMessage}
        border={'0.5px solid coral'}
        padding={'5%'}
        borderRadius={'9px'}
        backgroundColor={'white'}>
        <StyledText color={'coral'}>Touch to get message</StyledText>
      </StyledButton>
    </Block>
  );
};
