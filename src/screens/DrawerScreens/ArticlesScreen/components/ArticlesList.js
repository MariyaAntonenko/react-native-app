import React, {useCallback} from 'react';
import {StyledText} from '../../../../common/simpleComponents/Text';
import {Block} from '../../../../common/simpleComponents/Block';
import {SwipeList} from '../../../../common/complicatedComponents/SwipeList';
import {articlesData} from '../../../../common/consts';
import {ArticlesItem} from './ArticlesItem';

export const ArticlesList = () => {
  const renderItem = useCallback(({item}) => <ArticlesItem data={item} />, []);

  return (
    <Block flex={1}>
      <Block
        backgroundColor={'white'}
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        pt={'20px'}
        pb={'15px'}
        pr={'80px'}
        pl={'30px'}
        borderBottomColor={'gray'}
        borderBottomStyle={'solid'}
        borderBottomWidth={'0.5px'}>
        <StyledText fontSize={'15px'} color={'gray'} fontWeight={'400'}>
          ARTICLE NO.
        </StyledText>
        <StyledText fontSize={'15px'} color={'gray'} fontWeight={'400'}>
          ACT.
        </StyledText>
      </Block>
      <Block backgroundColor={'white'} flex={1}>
        <SwipeList data={articlesData} renderItem={renderItem} />
      </Block>
    </Block>
  );
};
