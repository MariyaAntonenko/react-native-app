import React from 'react';
import {AnimatedScrollView} from '../../../../common/simpleComponents/AnimatedScrollView';
import {Animated} from 'react-native';
import {markersConsts} from '../../../../common/consts';
import {Block} from '../../../../common/simpleComponents/Block';
import {Image} from '../../../../common/simpleComponents/Image';
import {StyledText} from '../../../../common/simpleComponents/Text';

export const BottomSlider = ({CARD_HEIGHT, CARD_WIDTH, animation, scroll}) => {
  return (
    <AnimatedScrollView
      horizontal
      ref={scroll}
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                x: animation,
              },
            },
          },
        ],
        {useNativeDriver: true},
      )}
      scrollEventThrottle={1}
      showsHorizontalScrollIndicator={false}
      snapToInterval={CARD_WIDTH}
      position={'absolute'}
      bottom={'30px'}
      left={'0'}
      right={'0'}
      paddingVertical={'10px'}>
      {markersConsts.map((marker, index) => {
        return (
          <Block
            key={marker.id}
            marginHorizontal={'20px'}
            height={CARD_HEIGHT}
            width={CARD_WIDTH}
            backgroundColor={'white'}
            paddingVertical={'10px'}
            paddingHorizontal={'10px'}>
            <Image source={{uri: marker.url}} width={'100%'} height={'80%'} />
            <Block
              paddingVertical={'10px'}
              alignItems={'center'}
              justifyContent={'center'}>
              <StyledText fontSize={'15px'}>{marker.title}</StyledText>
            </Block>
          </Block>
        );
      })}
    </AnimatedScrollView>
  );
};
