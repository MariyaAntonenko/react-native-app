import React, {useCallback} from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import {SwipeList} from '../../../../common/complicatedComponents/SwipeList';
import {
  articlesData,
  articlesSecondaryHeaderName,
} from '../../../../common/consts';
import {ArticlesItem} from './ArticlesItem';
import {SecondaryHeader} from '../../../../common/complicatedComponents/SecondaryHeader';

export const ArticlesList = () => {
  const renderItem = useCallback(({item}) => <ArticlesItem data={item} />, []);

  return (
    <Block flex={1}>
      <Block backgroundColor={'white'} flex={1}>
        <SecondaryHeader columName={articlesSecondaryHeaderName} />
        <SwipeList data={articlesData} renderItem={renderItem} />
      </Block>
    </Block>
  );
};
