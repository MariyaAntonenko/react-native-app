import React from 'react';
import DownloadIcon from '../../../assets/icons/download.svg';
import {PermissionsAndroid, Platform} from 'react-native';
import {Image} from '../../../common/simpleComponents/Image';
import RNFetchBlob from 'rn-fetch-blob';
import CameraRoll from '@react-native-community/cameraroll';
import {Block} from '../../../common/simpleComponents/Block';
import {StyledText} from '../../../common/simpleComponents/Text';
import {StyledButton} from '../../../common/simpleComponents/Button';
export const DownloadScreen = () => {
  console.log(RNFetchBlob.fs.dirs);
  const REMOTE_IMAGE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/gift.png';
  const checkPermission = async () => {
    if (Platform.OS === 'ios') {
      downloadImage();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message: 'App needs access to your storage to download Photos',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          downloadImage();
        } else {
          alert('Storage Permission Not Granted');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };
  const downloadImage = () => {
    let date = new Date();
    let image_URL = REMOTE_IMAGE_PATH;
    let ext = getExtention(image_URL);
    ext = '.' + ext[0];
    if (Platform.OS === 'android') {
      const {config, fs} = RNFetchBlob;
      let PictureDir = fs.dirs.PictureDir;
      let options = {
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path:
            PictureDir +
            '/image_' +
            Math.floor(date.getTime() + date.getSeconds() / 2) +
            ext,
          description: 'Image',
        },
      };
      config(options)
        .fetch('GET', image_URL)
        .then(res => {
          alert('Image Downloaded Successfully.');
        });
    } else {
      CameraRoll.save(image_URL).then(alert('Image Downloaded Successfully.'));
    }
  };

  const getExtention = filename => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };

  return (
    <Block flex={1} justifyContent={'center'} alignItems={'center'}>
      <Image
        source={{
          uri: REMOTE_IMAGE_PATH,
        }}
        width={'200px'}
        height={'200px'}
      />
      <DownloadIcon width={'200px'} height={'200px'} />
      <StyledButton onPress={checkPermission}>
        <StyledText>DOWNLOAD</StyledText>
      </StyledButton>
    </Block>
  );
};
