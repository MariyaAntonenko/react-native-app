import React, {useEffect, useState} from 'react';
import {useCamera} from 'react-native-camera-hooks';
import {ScrollView} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import {RNCamera} from 'react-native-camera';
import {Block} from '../../../common/simpleComponents/Block';
import {Image} from '../../../common/simpleComponents/Image';
import {CameraButtons} from './components/CameraButtons';

export const CameraScreen = () => {
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
        style={{flex: 1}}
        flashMode={flash}
      />
      <CameraButtons
        flash={flash}
        captureHandle={captureHandle}
        toggleFacing={toggleFacing}
        toggleFlash={toggleFlash}
      />
      <Block flexDirection={'row'} pt={'20px'} pb={'40px'}>
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
    </Block>
  );
};
