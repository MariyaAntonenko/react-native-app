import React, {useEffect, useState} from 'react';
import {RNCamera} from 'react-native-camera';
import {Block} from '../../../common/simpleComponents/Block';
import {
  accelerometer,
  SensorTypes,
  setUpdateIntervalForType,
} from 'react-native-sensors';

export const AccelerometerScreen = () => {
  const [value, setValue] = useState({x: 0, y: 0});
  const [startObserveAccelerometer, setStartObserveAccelerometer] =
    useState(true);
  const pi = Math.PI;
  let degreeValue = Math.round((Math.atan2(value.x, value.y) * 180) / pi);
  useEffect(() => {
    setUpdateIntervalForType(SensorTypes.accelerometer, 100);
    startObserveAccelerometer &&
      accelerometer.subscribe(({x, y}) => {
        setValue({x: x, y: y});
      });
    return () => {
      setStartObserveAccelerometer(false);
    };
  }, []);
  return (
    <Block flex={1}>
      <RNCamera
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Block
          style={{
            transform: [{rotate: `${degreeValue}deg`}],
          }}
          borderBottomWidth={'3px'}
          borderBottomColor={'red'}
          width={'300px'}
        />
      </RNCamera>
    </Block>
  );
};
