import React, {useState, useEffect, useRef, useCallback} from 'react';
import MapView, {Marker} from 'react-native-maps';
import MarkerDestination from '../../../assets/icons/marker-dest.svg';
import {markersConsts} from '../../../common/consts';
import {Animated, Dimensions} from 'react-native';
import {Block} from '../../../common/simpleComponents/Block';
import {BottomSlider} from './components/BottomSlider';

const {height} = Dimensions.get('window');
const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

export const MapScreen = () => {
  const [selectedMarker, setSelectedMarker] = useState(0);
  const animation = new Animated.Value(0);
  let scroll = useRef(null);
  useEffect(() => {
    scroll.current.scrollTo({
      x: selectedMarker * (CARD_WIDTH + 3),
      y: 0,
      animated: true,
    });
  }, [selectedMarker]);

  const onChangeMarker = index =>
    useCallback(() => {
      setSelectedMarker(index);
    }, [index]);

  const interpolations = markersConsts.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];
    const scale = animation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: 'clamp',
    });
    const opacity = animation.interpolate({
      inputRange,
      outputRange: [0.6, 1, 0.6],
      extrapolate: 'clamp',
    });
    return {scale, opacity};
  });
  return (
    <Block flex={1}>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 47.8388,
          longitude: 35.1396,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsMyLocationButton
        userLocationPriority={'high'}
        mapType={'hybrid'}
        followsUserLocation
        showsUserLocation>
        {markersConsts.map((marker, index) => {
          const scaleStyle = {
            transform: [
              {
                scale: interpolations[index].scale,
              },
            ],
          };
          const opacityStyle = {
            opacity: interpolations[index].opacity,
          };
          return (
            <Marker
              onPress={onChangeMarker(index)}
              key={marker.id}
              coordinate={marker.coordinate}
              title={marker.title}>
              <Animated.View style={[opacityStyle, scaleStyle]}>
                <MarkerDestination width={'30px'} height={'40px'} />
              </Animated.View>
            </Marker>
          );
        })}
      </MapView>
      <BottomSlider
        scroll={scroll}
        animation={animation}
        CARD_HEIGHT={CARD_HEIGHT}
        CARD_WIDTH={CARD_WIDTH}
      />
    </Block>
  );
};
