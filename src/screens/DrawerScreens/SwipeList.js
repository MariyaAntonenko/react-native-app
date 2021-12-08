import React, {useState, useCallback, useEffect} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Block} from '../../common/simpleComponents/Block';
import {StyledButton} from '../../common/simpleComponents/Button';
import {StyledText} from '../../common/simpleComponents/Text';

export const SwipeList = ({renderItem, handleKey, data}) => {
  const [dataList, setDataList] = useState([...data]);
  const handleDelete = (item, rowData, rowMap) => {
    if (rowMap[rowData.item.id]) {
      rowMap[rowData.item.id].closeRow();
      setDataList([...dataList.filter(elem => elem.id !== item)]);
    }
  };
  if (!dataList.length) {
    return (
      <Block
        flex={1}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}>
        <StyledText fontSize={'25px'} color={'gray'}>
          Empty :(
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
      renderHiddenItem={(rowData, rowMap) => (
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
            <StyledText color={'white'}>Delete</StyledText>
          </StyledButton>
        </Block>
      )}
      leftOpenValue={75}
      rightOpenValue={-150}
      onRowOpen={(rowKey, rowMap) => {
        setTimeout(() => {
          if (rowMap[rowKey]) {
            rowMap[rowKey]?.closeRow();
          }
        }, 3000);
      }}
    />
  );
};
