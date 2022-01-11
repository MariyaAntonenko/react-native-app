import React from 'react';
import {SafeAreaView} from '../../../common/simpleComponents/SafeAreaView';
import {StatusBar} from 'react-native';
import {Block} from '../../../common/simpleComponents/Block';
import {StyledButton} from '../../../common/simpleComponents/Button';
import {StyledText} from '../../../common/simpleComponents/Text';
import {notificationButtons} from './PushNotification';

export const PushNotificationScreen = () => {
  return (
    <SafeAreaView pt={StatusBar.currentHeight} flex={1}>
      <Block justifyContent={'space-around'} alignItems={'center'} flex={1}>
        {notificationButtons.map(button => (
          <StyledButton
            key={button.id}
            onPress={button.notificationFunction}
            activeOpacity={0.3}
            border={`1px solid ${button.color}`}
            padding={'2%'}
            borderRadius={'6px'}>
            <StyledText
              fontWeight={'600'}
              fontSize={'20px'}
              color={button.color}>
              {button.title}
            </StyledText>
          </StyledButton>
        ))}
      </Block>
    </SafeAreaView>
  );
};
