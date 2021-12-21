import React, {useCallback, useState} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Block} from '../simpleComponents/Block';
import {StyledButton} from '../simpleComponents/Button';
import {StyledText} from '../simpleComponents/Text';
import {strings} from './Context';

export const SwipeList = ({data, renderItem}) => {
  const [dataList, setDataList] = useState(data);

  const handleKey = useCallback(item => item.id, []);

  const handleDelete = (item, rowData, rowMap) => {
    if (rowMap[rowData.item.id]) {
      rowMap[rowData.item.id].closeRow();
      setDataList(() => [...dataList.filter(elem => elem.id !== item)]);
    }
  };

  const renderHiddenItem = useCallback(
    (rowData, rowMap) => (
      <Block
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'flex-end'}
        height={'100%'}>
        <StyledButton
          display={'flex'}
          width={'50%'}
          justifyContent={'center'}
          alignItems={'center'}
          backgroundColor={'red'}
          onPress={() => handleDelete(rowData.item.id, rowData, rowMap)}>
          <StyledText color={'white'}>
            {strings.articles.swipeTodeleteButton}
          </StyledText>
        </StyledButton>
      </Block>
    ),
    [handleDelete],
  );

  const onRowOpen = useCallback(
    (rowKey, rowMap) =>
      setTimeout(() => {
        if (rowMap[rowKey]) {
          rowMap[rowKey]?.closeRow();
        }
      }, 3000),
    [handleDelete],
  );

  if (!dataList.length) {
    return (
      <Block
        flex={1}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}>
        <StyledText fontSize={'25px'} color={'gray'}>
          {strings.articles.emptyMessage}
        </StyledText>
      </Block>
    );
  }

  return (
    <SwipeListView
      useFlatList
      data={dataList}
      disableRightSwipe
      keyExtractor={handleKey}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      leftOpenValue={75}
      rightOpenValue={-150}
      onRowOpen={onRowOpen}
    />
  );
};
