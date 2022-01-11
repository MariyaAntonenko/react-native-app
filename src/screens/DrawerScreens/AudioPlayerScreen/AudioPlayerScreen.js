import React, {useEffect} from 'react';
import TrackPlayer, {Capability} from 'react-native-track-player';
import {playList} from '../../../common/consts';
import {Block} from '../../../common/simpleComponents/Block';
import {PlayerImage} from './components/PlayerImage';
import {PlayerTitle} from './components/PlayerTitle';
import {PlayerProgress} from './components/PlayerProgress';
import {PlayerControlButtons} from './components/PlayerControlButtons';
import {PlayerRepeatMode} from './components/PlayerRepeatMode';

const setupPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      stopWithApp: false,
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
      ],
      notificationCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
      ],
    });
    await TrackPlayer.add(playList);
  } catch (e) {
    console.log(e);
  }
};
export const AudioPlayerScreen = () => {
  useEffect(() => {
    setupPlayer();
  }, []);

  return (
    <Block
      flex={1}
      pt={'20px'}
      backgroundColor={'#052d42'}
      justifyContent={'center'}
      alignItems={'center'}>
      <PlayerImage />
      <PlayerTitle />
      <PlayerProgress />
      <PlayerControlButtons />
      <PlayerRepeatMode />
    </Block>
  );
};
