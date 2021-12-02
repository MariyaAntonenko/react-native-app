import React from 'react';
import {ArticlesItem} from './ArticlesItem';
import {FlatList} from 'react-native';

export const ArticlesList = ({articlesData}) => {
  return (
    <FlatList
      data={articlesData}
      renderItem={({item}) => <ArticlesItem el={item} />}
      keyExtractor={item => item.id}
    />
  );
};
