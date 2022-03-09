import React from 'react';
import {StyledButton} from '../../../../common/simpleComponents/Button';
import PrevPlayIcon from '../../../../assets/icons/play-prev.svg';
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';
import PauseIcon from '../../../../assets/icons/pause.svg';
import PlayIcon from '../../../../assets/icons/play.svg';
import NextPlayIcon from '../../../../assets/icons/play-next.svg';
import {Block} from '../../../../common/simpleComponents/Block';

export const PlayerControlButtons = () => {
  const playbackState = usePlaybackState();
  const togglePlayback = async playbackState => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack !== null) {
      if (playbackState === State.Paused) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };
  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };
  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };
  const onChangePlaybackState = () => {
    togglePlayback(playbackState);
  };
  return (
    <Block
      pt={'40px'}
      pb={'20px'}
      width={'100%'}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'space-around'}>
      <StyledButton onPress={skipToPrevious}>
        <PrevPlayIcon width={'30px'} height={'30px'} fill={'blue'} />
      </StyledButton>
      <StyledButton onPress={onChangePlaybackState}>
        {playbackState === State.Playing ? (
          <PauseIcon width={'30px'} height={'30px'} fill={'blue'} />
        ) : (
          <PlayIcon width={'30px'} height={'30px'} fill={'blue'} />
        )}
      </StyledButton>
      <StyledButton onPress={skipToNext}>
        <NextPlayIcon width={'30px'} height={'30px'} fill={'blue'} />
      </StyledButton>
    </Block>
  );
};
