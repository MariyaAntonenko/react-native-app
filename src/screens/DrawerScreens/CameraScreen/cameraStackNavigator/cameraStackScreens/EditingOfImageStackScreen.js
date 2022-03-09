import React, {useState} from 'react';
import {PESDK} from 'react-native-photoeditorsdk';
import {SafeAreaView} from '../../../../../common/simpleComponents/SafeAreaView';
import {StatusBar} from 'react-native';
import {Image} from '../../../../../common/simpleComponents/Image';
import {StyledButton} from '../../../../../common/simpleComponents/Button';
import {StyledText} from '../../../../../common/simpleComponents/Text';
import {useNavigation, useRoute} from '@react-navigation/native';
import ArrowBack from '../../../../../assets/icons/arrowLeft.svg';
import ArrowNext from '../../../../../assets/icons/arrowRight.svg';
import {Block} from '../../../../../common/simpleComponents/Block';
import {HeaderNavigation} from './components/HeaderNavigation';
import CameraRoll from '@react-native-community/cameraroll';

export const EditingOfImageStackScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const tempImage = route.params.source;
  const [currentImage, setCurrentImage] = useState(tempImage);
  const goBackFilter = () => {
    navigation.goBack('Filter');
  };
  const goBackCamera = () => {
    navigation.navigate('Camera');
  };
  const onSavetoGallery = () => {
    CameraRoll.save(currentImage)
      .then(alert('Image saved successfully'))
      .catch(e => {
        console.log('Denied', e);
      });
    goBackCamera();
  };
  const editorHeaderNavigationButttons = [
    {
      id: 1,
      buttonText: 'Go Back Filters',
      Icon: <ArrowBack width={'10px'} height={'10px'} fill={'#3490FD'} />,
      arrow: {
        isBackButton: true,
        isSaveButton: false,
      },
      onPressFunction: goBackFilter,
    },
    {
      id: 2,
      buttonText: 'Save',
      Icon: <ArrowNext width={'16px'} height={'18px'} fill={'#3490FD'} />,
      arrow: {
        isBackButton: false,
        isSaveButton: true,
      },
      onPressFunction: onSavetoGallery,
    },
  ];

  const openEditor = () => {
    PESDK.openEditor(currentImage).then(
      result => {
        setCurrentImage(result.image);
      },
      error => {
        console.log(error);
      },
    );
  };
  return (
    <SafeAreaView pt={StatusBar.currentHeight}>
      <Block flexDirection={'row'} justifyContent={'space-between'}>
        {editorHeaderNavigationButttons.map(button => (
          <HeaderNavigation {...button} key={button.id} />
        ))}
      </Block>
      <Block justifyContent={'center'} alignItems={'center'}>
        <Block
          marginHorizontal={'20px'}
          marginVertical={'20px'}
          justifyContent={'center'}
          alignItems={'center'}
          width={'300px'}
          height={'300px'}>
          <Image
            source={{uri: currentImage}}
            width={'100%'}
            height={'100%'}
            resizeMode={'contain'}
          />
        </Block>
        <StyledButton onPress={openEditor} paddingVertical={'30px'}>
          <StyledText color={'#3490FD'} fontSize={'18px'}>
            EDIT
          </StyledText>
        </StyledButton>
      </Block>
    </SafeAreaView>
  );
};
