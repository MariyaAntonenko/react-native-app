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
            buttonPositive: 'Allow',
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
  const downloadImage = async () => {
    let date = new Date();
    let image_URL: string = REMOTE_IMAGE_PATH;
    let ext: string | RegExpExecArray | null | undefined =
      getExtention(image_URL);
    if (ext) {
      ext = '.' + ext[0];
    }
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
    try {
      await config(options).fetch('GET', image_URL);
    } catch (e) {
      console.log(e);
    }
    CameraRoll.save(image_URL)
      .then(() => alert('Image Downloaded Successfully.'))
      .catch(e => {});
  };

  const getExtention = (filename: string) => {
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
