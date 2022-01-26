import React, {useEffect, useState} from 'react';
import {useCamera} from 'react-native-camera-hooks';
import {
  accelerometer,
  setUpdateIntervalForType,
  SensorTypes,
} from 'react-native-sensors';
import {ScrollView} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import {RNCamera} from 'react-native-camera';
import {launchImageLibrary} from 'react-native-image-picker';
import {Block} from '../../../../../common/simpleComponents/Block';
import {Image} from '../../../../../common/simpleComponents/Image';
import GalleryIcon from '../../../../../assets/icons/gallery.svg';
import {CameraButtons} from './components/CameraButtons';
import {StyledButton} from '../../../../../common/simpleComponents/Button';
import {StyledText} from '../../../../../common/simpleComponents/Text';

export const UserCameraStackScreen = props => {
  const {navigation} = props;
  const [value, setValue] = useState({x: 0, y: 0});
  const [startObserveAccelerometer, setStartObserveAccelerometer] =
    useState(true);
  const onOpenGallery = async () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    const result = await launchImageLibrary(options);
    if (result.didCancel) {
      console.log('User has cancel the process');
    } else {
      navigation.navigate('Editor', {
        source: result?.assets && result?.assets[0].uri,
      });
    }
  };
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

  const [photos, setPhotos] = useState([]);
  const [{cameraRef, type, flash}, {toggleFlash, toggleFacing, takePicture}] =
    useCamera();
  const captureHandle = async () => {
    try {
      const data = await takePicture();
      await CameraRoll.saveToCameraRoll(data.uri, 'photo');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    CameraRoll.getPhotos({first: 20})
      .then(res => setPhotos(res.edges))
      .catch(e => console.log(e));
  }, [photos]);

  return (
    <Block flex={1}>
      <RNCamera
        ref={cameraRef}
        type={type}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        flashMode={flash}>
        <Block
          style={{
            transform: [{rotate: `${degreeValue}deg`}],
          }}
          borderBottomWidth={'3px'}
          borderBottomColor={'red'}
          width={'300px'}
        />
      </RNCamera>
      <CameraButtons
        flash={flash}
        captureHandle={captureHandle}
        toggleFacing={toggleFacing}
        toggleFlash={toggleFlash}
      />
      <Block flexDirection={'row'} pt={'20px'}>
        <ScrollView horizontal>
          {photos.map((photo, i) => (
            <Image
              key={i}
              source={{uri: photo.node.image.uri}}
              width={'100px'}
              height={'100px'}
            />
          ))}
        </ScrollView>
      </Block>
      <StyledButton
        onPress={onOpenGallery}
        paddingVertical={'20px'}
        pb={'40px'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'center'}>
        <GalleryIcon width={'50px'} height={'50px'} />
        <StyledText color={'gray'} mt={'10px'}>
          See all photos...
        </StyledText>
      </StyledButton>
    </Block>
  );
};
