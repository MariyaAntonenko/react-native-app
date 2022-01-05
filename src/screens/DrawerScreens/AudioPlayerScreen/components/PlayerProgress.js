import React, {useEffect, useState} from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import {Slider} from '@miblanchard/react-native-slider';
import {StyledText} from '../../../../common/simpleComponents/Text';
import TrackPlayer, {useProgress} from 'react-native-track-player';

export const PlayerProgress = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);

  const progress = useProgress();

  useEffect(() => {
    if (!isSeeking && progress.position && progress.duration) {
      setSliderValue(progress.position / progress.duration);
    }
  }, [progress.position, progress.duration]);
  const slidingStarted = () => {
    setIsSeeking(true);
  };
  const slidingCompleted = async value => {
    await TrackPlayer.seekTo(value * progress.duration);
    setSliderValue(value);
    setIsSeeking(false);
  };
  return (
    <>
      <Block width={'80%'}>
        <Slider
          value={sliderValue}
          minimumValue={0}
          maximumValue={1}
          thumbTintColor={'blue'}
          minimumTrackTintColor={'yellow'}
          maximumTrackTintColor={'#ffff'}
          onSlidingStart={slidingStarted}
          onSlidingComplete={slidingCompleted}
        />
      </Block>
      <Block
        flexDirection={'row'}
        justifyContent={'space-between'}
        width={'80%'}>
        <StyledText color={'white'}>
          {new Date(progress.position * 1000).toISOString().substr(14, 5)}
        </StyledText>
        <StyledText color={'white'}>
          {new Date(progress.duration * 1000).toISOString().substr(14, 5)}
        </StyledText>
      </Block>
    </>
  );
};
