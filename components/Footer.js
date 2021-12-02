import React from 'react';
import {FooterContainer} from './styledComponents/Block';
import {StyledBottomButton} from './styledComponents/Button';
import {StyledText} from './styledComponents/Text';

export const Footer = () => {
  return (
    <FooterContainer pl={'10%'}>
      <StyledBottomButton pt={'20px'} pb={'20px'} mt={'15px'} mb={'15px'}>
        <StyledText fw={'700'} fz={'15px'} color={'#678497'}>
          Pull the trigger to start reading.
        </StyledText>
      </StyledBottomButton>
    </FooterContainer>
  );
};
