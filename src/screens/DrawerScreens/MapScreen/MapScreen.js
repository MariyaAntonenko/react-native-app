import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import MarkerDestination from '../../../assets/icons/marker-dest.svg';
import {markersConsts} from '../../../common/consts';

export const MapScreen = () => {
  return (
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
      {markersConsts.map(marker => (
        <Marker
          key={marker.id}
          coordinate={marker.coordinate}
          title={'Destination'}
          description={`Destination location #${marker.id}`}>
          <MarkerDestination width={'40px'} height={'40px'} />
        </Marker>
      ))}
    </MapView>
  );
};
