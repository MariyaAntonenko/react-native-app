import React from 'react';
import {Block} from '../../simpleComponents/Block';
import {StyledText} from '../../simpleComponents/Text';
import {StyledButton} from '../../simpleComponents/Button';
import {useNavigation} from '@react-navigation/native';

export const HeaderItem = ({
  Icon,
  extraText,
  label,
  clickable,
  textColor,
  extraTextColor,
}) => {
  const navigation = useNavigation();
  return (
    <StyledButton onPress={() => navigation.toggleDrawer()}>
      <Block display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Block display={'flex'} flexDirection={'row'} alignItems={'center'}>
          <Icon />
          {extraText ? (
            <StyledText
              fontSize={'22px'}
              fontWeight={'500'}
              color={extraTextColor}>
              {extraText}
            </StyledText>
          ) : null}
        </Block>
        {clickable ? (
          <StyledButton>
            <StyledText
              color={textColor}
              mt={'15px'}
              mr={'10px'}
              fontSize={'17px'}
              fontWeight={'700'}>
              {label}
            </StyledText>
          </StyledButton>
        ) : (
          <StyledText
            color={textColor}
            mt={'15px'}
            ml={'5px'}
            mr={'10px'}
            fontWeight={'700'}
            fontSize={'16px'}>
            {label}
          </StyledText>
        )}
      </Block>
    </StyledButton>
  );
};
