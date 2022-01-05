import React, {useState} from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import {StyledText} from '../../../../common/simpleComponents/Text';
import TrackPlayer, {
  Event,
  useTrackPlayerEvents,
} from 'react-native-track-player';

export const PlayerTitle = () => {
  const [trackTitle, setTrackTitle] = useState('');
  const [trackArtist, setTrackArtist] = useState('');
  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (
      event.type === Event.PlaybackTrackChanged &&
      event.nextTrack !== undefined
    ) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const {title, artist} = track;
      setTrackTitle(title);
      setTrackArtist(artist);
    }
  });
  return (
    <Block padding={'5%'} alignItems={'center'}>
      <StyledText color={'#eeee'} fontSize={'25px'}>
        {trackTitle}
      </StyledText>
      <StyledText color={'#eeee'}>{trackArtist}</StyledText>
    </Block>
  );
};
