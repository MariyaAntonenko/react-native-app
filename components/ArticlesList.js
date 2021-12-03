import React, {useCallback} from 'react';
import {ArticlesItem} from './ArticlesItem';
import {FlatList} from 'react-native';

export const ArticlesList = ({articlesData}) => {
  const renderItem = useCallback(({item}) => <ArticlesItem data={item} />, []);
  const handleKey = useCallback(item => item.id, []);
  return (
    <FlatList
      data={articlesData}
      renderItem={renderItem}
      keyExtractor={handleKey}
    />
  );
};
