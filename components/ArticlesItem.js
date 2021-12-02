import React from 'react';
import Arrow from '../assets/icons/arrow.svg';
import {
  Block,
  CartAreaItems,
  ItemContainer,
  StyledView,
} from './styledComponents/Block';
import {StyledText} from './styledComponents/Text';
import {StyledAmountButton} from './styledComponents/Button';
import {ArticleImage} from './styledComponents/Image';

export const ArticlesItem = ({el}) => {
  return (
    <ItemContainer>
      <ArticleImage
        source={require('../assets/images/articlesImg.png')}
        mt={'5px'}
        mb={'5px'}
        mr={'-35px'}
      />
      <Block>
        <StyledText fz={'12px'} color={'black'} fw={'500'} mt={'5px'}>
          {el.article}
        </StyledText>
        <CartAreaItems>
          <StyledText fz={'12px'} color={'black'} fw={'500'} mt={'5px'}>
            {el.color}
          </StyledText>
          <StyledText
            fz={'12px'}
            color={'black'}
            fw={'500'}
            mt={'5px'}
            ml={'25px'}>
            {el.size}
          </StyledText>
        </CartAreaItems>
        <StyledText
          fz={'12px'}
          color={'#a9acb0'}
          fw={'400'}
          mt={'5px'}
          mb={'5px'}>
          {el.type}
        </StyledText>
      </Block>
      <StyledView mr={'-15px'}>
        <StyledAmountButton mr={'10px'}>
          <StyledText fz={'12px'} color={'white'} fw={'700'}>
            {el.amount}
          </StyledText>
        </StyledAmountButton>
        <Arrow width={15} height={15} fill={'#000'} />
      </StyledView>
    </ItemContainer>
  );
};
