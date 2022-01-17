import React, {useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {Platform, PermissionsAndroid} from 'react-native';
import MarkerIcon from '../../../assets/icons/marker-dest.svg';
import {Block} from '../../../common/simpleComponents/Block';
import MapView, {Marker, Polyline} from 'react-native-maps';

const permissionRequest = () =>
  Platform.OS === 'ios'
    ? Geolocation.requestAuthorization('whenInUse')
    : PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

export const GPSScreen = () => {
  const [location, setLocation] = useState([]);
  const [hasPermissions, setHasPermissions] = useState(false);

  useEffect(() => {
    permissionRequest().then(res => {
      setHasPermissions(res === 'granted');
    });
  }, [setHasPermissions]);

  useEffect(() => {
    if (!hasPermissions) {
      return;
    }
    const _watchId = Geolocation.watchPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation([...location, {latitude, longitude}]);
      },
      error => {
        console.log(error);
      },
      {
        forceLocationManager: true,
        forceRequestLocation: true,
        showLocationDialog: true,
        enableHighAccuracy: true,
        distanceFilter: 0,
        interval: 5000,
        fastestInterval: 2000,
      },
    );
    return () => {
      if (_watchId) {
        Geolocation.clearWatch(_watchId);
      }
    };
  }, [location, hasPermissions]);

  return (
    <Block flex={1}>
      <MapView
        key={hasPermissions}
        style={{flex: 1}}
        initialRegion={{
          latitude: 47.8388,
          longitude: 35.1396,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        userLocationPriority={'high'}
        followsUserLocation
        showsUserLocation>
        <Polyline strokeWidth={5} strokeColor={'red'} coordinates={location} />
        {location[0] && (
          <Marker coordinate={location[0]}>
            <MarkerIcon width={'60px'} height={'60px'} fill={'blue'} />
          </Marker>
        )}
      </MapView>
    </Block>
  );
};
