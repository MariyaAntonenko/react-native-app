import React from 'react';
import {Block} from './styledComponents/Block';
import {StyledText} from './styledComponents/Text';
import {StyledButton} from './styledComponents/Button';

export const HeaderItem = ({Icon, extraText, label, clickable}) => {
  return (
    <Block display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <Block display={'flex'} flexDirection={'row'} alignItems={'center'}>
        <Icon />
        {extraText ? (
          <StyledText fontSize={'22px'} fontWeight={'500'} color={'black'}>
            {extraText}
          </StyledText>
        ) : null}
      </Block>
      {clickable ? (
        <StyledButton>
          <StyledText
            color={'#3490FD'}
            mt={'15px'}
            mr={'30px'}
            fontSize={'17px'}
            fontWeight={'700'}>
            {label}
          </StyledText>
        </StyledButton>
      ) : (
        <StyledText
          color={'black'}
          mt={'15px'}
          ml={'5px'}
          fontWeight={'700'}
          fontSize={'16px'}>
          {label}
        </StyledText>
      )}
    </Block>
  );
};
