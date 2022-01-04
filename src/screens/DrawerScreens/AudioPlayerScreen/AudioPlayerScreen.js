import React, {useState, useEffect} from 'react';
import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {Slider} from '@miblanchard/react-native-slider';
import {playList} from '../../../common/consts';
import PrevPlayIcon from '../../../assets/icons/play-prev.svg';
import PlayIcon from '../../../assets/icons/play.svg';
import PauseIcon from '../../../assets/icons/pause.svg';
import MusicIcon from '../../../assets/icons/musicIcon.svg';
import NextPlayIcon from '../../../assets/icons/play-next.svg';
import LikeIcon from '../../../assets/icons/like.svg';
import RepeatOffIcon from '../../../assets/icons/repeat-off.svg';
import RepeatQueueIcon from '../../../assets/icons/repeat.svg';
import RepeatOneIcon from '../../../assets/icons/repeat-one.svg';
import {Block} from '../../../common/simpleComponents/Block';
import {StyledText} from '../../../common/simpleComponents/Text';
import {StyledButton} from '../../../common/simpleComponents/Button';

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
export const AudioPlayerScreen = () => {
  const [isSeeking, setIsSeeking] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [repeatSongMode, setRepeatSongMode] = useState(0);
  const [trackTitle, setTrackTitle] = useState('');
  const [trackArtist, setTrackArtist] = useState('');
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isDisableNextButton, setDisableNextButton] = useState(false);
  const playbackState = usePlaybackState();
  const progress = useProgress();

  useEffect(async () => {
    await TrackPlayer.getCurrentTrack().then(res => setCurrentTrack(res));
    return () => TrackPlayer.destroy();
  }, [currentTrack]);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack !== null) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const {title, artist} = track;
      setTrackTitle(title);
      setTrackArtist(artist);
    }
  });

  const skipToNext = async () => {
    if (currentTrack < playList.length) {
      await TrackPlayer.skipToNext();
    }
    setDisableNextButton(true);
  };
  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };
  useEffect(() => {
    setupPlayer();
  }, []);

  useEffect(() => {
    if (!isSeeking && progress.position && progress.duration) {
      setSliderValue(progress.position / progress.duration);
    }
  }, [progress.position, progress.duration]);

  const onChangePlaybackState = () => {
    togglePlayback(playbackState);
  };
  const slidingStarted = () => {
    setIsSeeking(true);
  };
  const slidingCompleted = async value => {
    await TrackPlayer.seekTo(value * progress.duration);
    setSliderValue(value);
    setIsSeeking(false);
  };

  const RepeatModeIcon = () => {
    if (repeatSongMode === 0) {
      return <RepeatOffIcon width={'25px'} height={'25px'} fill={'blue'} />;
    }
    if (repeatSongMode === 1) {
      return <RepeatOneIcon width={'25px'} height={'25px'} fill={'blue'} />;
    }
    if (repeatSongMode === 2) {
      return <RepeatQueueIcon width={'25px'} height={'25px'} fill={'blue'} />;
    }
  };
  const onToggleRepeatMode = () => {
    if (repeatSongMode === 0) {
      TrackPlayer.setRepeatMode(RepeatMode.Track);
      setRepeatSongMode(1);
    }
    if (repeatSongMode === 1) {
      TrackPlayer.setRepeatMode(RepeatMode.Queue);
      setRepeatSongMode(2);
    }
    if (repeatSongMode === 2) {
      TrackPlayer.setRepeatMode(RepeatMode.Off);
      setRepeatSongMode(0);
    }
  };
  return (
    <Block
      flex={1}
      pt={'5%'}
      backgroundColor={'#052d42'}
      justifyContent={'center'}
      alignItems={'center'}>
      <Block border={'0.5px solid blue'} borderRadius={'9px'} padding={'15%'}>
        <MusicIcon width={'200px'} height={'200px'} />
      </Block>
      <Block padding={'5%'} alignItems={'center'}>
        <StyledText color={'#eeee'} fontSize={'25px'}>
          {trackTitle}
        </StyledText>
        <StyledText color={'#eeee'}>{trackArtist}</StyledText>
      </Block>
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
      <Block
        padding={'5%'}
        pt={'10%'}
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
        <StyledButton disabled={isDisableNextButton} onPress={skipToNext}>
          <NextPlayIcon width={'30px'} height={'30px'} fill={'blue'} />
        </StyledButton>
      </Block>
      <Block
        flexDirection={'row'}
        justifyContent={'space-around'}
        width={'100%'}
        padding={'10%'}>
        <StyledButton onPress={onToggleRepeatMode}>
          {RepeatMode[repeatSongMode] && <RepeatModeIcon />}
        </StyledButton>
        <StyledButton>
          <LikeIcon width={'25px'} height={'25px'} fill={'blue'} />
        </StyledButton>
      </Block>
    </Block>
  );
};
