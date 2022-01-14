import React from 'react';
import {Block} from '../../../../../common/simpleComponents/Block';
import {StyledButton} from '../../../../../common/simpleComponents/Button';
import {StyledText} from '../../../../../common/simpleComponents/Text';

export const SignatureTabBar = ({state, descriptors, navigation}) => {
  return (
    <Block
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'space-around'}
      alignItems={'center'}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <StyledButton
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={isFocused ? '8px' : '0'}
            display={'flex'}
            padding={'5%'}
            width={'50%'}
            border={isFocused ? '0.5px solid #EDEDED' : 'none'}>
            <StyledText color={'gray'} fontWeight={'700'}>
              {label}
            </StyledText>
          </StyledButton>
        );
      })}
    </Block>
  );
};
