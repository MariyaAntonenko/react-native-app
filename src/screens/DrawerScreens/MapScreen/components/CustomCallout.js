import React from 'react';
import {ScrollView} from 'react-native';
import {Block} from '../../../../common/simpleComponents/Block';
import {StyledText} from '../../../../common/simpleComponents/Text';
import {Image} from '../../../../common/simpleComponents/Image';

export const CustomCallout = ({markerContent}) => {
  return (
    <Block
      flex={1}
      minWidth={'80px'}
      maxWidth={'300px'}
      minHeight={'20px'}
      maxHeight={'300px'}
      width={'100%'}
      justifyContent={'center'}
      alignItems={'flex-end'}
      borderRadius={'25px'}
      backgroundColor={'white'}
      paddingVertical={'10px'}
      paddingHorizontal={'10px'}>
      <Block
        flexDirection={'row'}
        justifyContent={'space-around'}
        paddingVertical={'10px'}>
        <ScrollView>
          <StyledText>{markerContent.content}</StyledText>
        </ScrollView>
        <Block marginHorizontal={'10px'}>
          <Image
            source={{uri: `${markerContent.url}`}}
            width={'80px'}
            height={'90px'}
          />
        </Block>
      </Block>
    </Block>
  );
};
