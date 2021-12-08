import React, {useCallback} from 'react';
import {ArticlesItem} from './ArticlesItem';
import {StyledText} from '../../../../common/simpleComponents/Text';
import {Block} from '../../../../common/simpleComponents/Block';
import {SwipeList} from '../../SwipeList';
import {articlesData} from '../../../../common/consts';

export const ArticlesList = () => {
  const renderItem = useCallback(({item}) => <ArticlesItem data={item} />, []);
  const handleKey = useCallback(item => item.id, []);
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
        <SwipeList
          data={articlesData}
          handleKey={handleKey}
          renderItem={renderItem}
        />
      </Block>
    </Block>
  );
};
