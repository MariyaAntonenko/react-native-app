import React, {useState} from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import {StyledButton} from '../../../../common/simpleComponents/Button';
import TrackPlayer, {RepeatMode} from 'react-native-track-player';
import LikeIcon from '../../../../assets/icons/like.svg';
import RepeatOffIcon from '../../../../assets/icons/repeat-off.svg';
import RepeatOneIcon from '../../../../assets/icons/repeat-one.svg';
import RepeatQueueIcon from '../../../../assets/icons/repeat.svg';

export const PlayerRepeatMode = () => {
  const [repeatSongMode, setRepeatSongMode] = useState(0);

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
      flexDirection={'row'}
      justifyContent={'space-around'}
      width={'100%'}
      paddingHorizontal={'20px'}
      paddingVertical={'30px'}>
      <StyledButton onPress={onToggleRepeatMode}>
        {RepeatMode[repeatSongMode] && <RepeatModeIcon />}
      </StyledButton>
      <StyledButton>
        <LikeIcon width={'25px'} height={'25px'} fill={'blue'} />
      </StyledButton>
    </Block>
  );
};
