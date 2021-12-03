import React from 'react';
import Arrow from '../assets/icons/arrow.svg';
import {Block} from './styledComponents/Block';
import {StyledText} from './styledComponents/Text';
import {StyledButton} from './styledComponents/Button';
import {ArticleImage} from './styledComponents/Image';

export const ArticlesItem = ({data}) => {
  return (
    <Block
      display={'flex'}
      flexDirection={'row'}
      alignItems={'center'}
      pt={'15px'}
      pb={'15px'}
      pl={'10px'}
      pr={'5px'}
      borderBottomWidth={'0.5px'}
      borderBottomColor={'gray'}>
      <ArticleImage
        source={require('../assets/images/articlesImg.png')}
        width={'70px'}
        height={'70px'}
      />
      <Block flex={1} ml={'10px'}>
        <StyledText color={'black'} fontWeight={'500'} mt={'5px'}>
          {data.article}
        </StyledText>
        <Block display={'flex'} flexDirection={'row'}>
          <StyledText color={'black'} fontWeight={'500'} mt={'5px'}>
            {data.color}
          </StyledText>
          <StyledText color={'black'} fontWeight={'500'} mt={'5px'} ml={'25px'}>
            {data.size}
          </StyledText>
        </Block>
        <StyledText color={'#a9acb0'} fw={'400'} mt={'8px'}>
          {data.type}
        </StyledText>
      </Block>
      <Block
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-around'}
        ml={'25px'}>
        <StyledButton
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          width={'100px'}
          height={'15px'}
          borderRadius={'6px'}
          backgroundColor={'green'}
          mr={'15px'}>
          <StyledText fontSize={'12px'} color={'white'} fontWeight={'700'}>
            {data.amount}
          </StyledText>
        </StyledButton>
        <Arrow width={15} height={15} fill={'#000'} />
      </Block>
    </Block>
  );
};
