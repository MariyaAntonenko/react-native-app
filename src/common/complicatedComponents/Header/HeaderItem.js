import React from 'react';
import {Block} from '../../simpleComponents/Block';
import {StyledText} from '../../simpleComponents/Text';
import {StyledButton} from '../../simpleComponents/Button';

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
            mr={'10px'}
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
          mr={'10px'}
          fontWeight={'700'}
          fontSize={'16px'}>
          {label}
        </StyledText>
      )}
    </Block>
  );
};
