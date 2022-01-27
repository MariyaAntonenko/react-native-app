import React, {useState, useRef, useCallback} from 'react';
import {SafeAreaView} from '../../../../../common/simpleComponents/SafeAreaView';
import {FlatList} from 'react-native';
import {FILTERS} from './components/filters';
import {StyledText} from '../../../../../common/simpleComponents/Text';
import {StatusBar} from 'react-native';
import {Block} from '../../../../../common/simpleComponents/Block';
import {Image} from '../../../../../common/simpleComponents/Image';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StyledButton} from '../../../../../common/simpleComponents/Button';
import CameraRoll from '@react-native-community/cameraroll';
import {FooterTabs} from './components/FooterTabs';
import {HeaderNavigation} from './components/HeaderNavigation';
import ArrowBack from '../../../../../assets/icons/arrowLeft.svg';
import ArrowNext from '../../../../../assets/icons/arrowRight.svg';

export const FilteringOfImageStackScreen = () => {
  const route = useRoute();
  const sourceOfImage = route.params.source;
  const [tempImage, setTempImage] = useState('');
  const [selectedFilterIndex, setIndex] = useState(0);
  const [isActiveTab, setActiveTab] = useState({
    filter: true,
    edit: false,
  });
  const navigation = useNavigation();
  const goBackCamera = () => {
    navigation.goBack();
  };
  const onSavetoGallery = () => {
    CameraRoll.save(tempImage)
      .then(alert('Image saved successfully'))
      .catch(e => {
        console.log('Denied', e);
      });
    goBackCamera();
  };

  const filterHeaderNavigationButttons = [
    {
      id: 1,
      buttonText: 'Go Back Camera',
      Icon: <ArrowBack width={'10px'} height={'10px'} fill={'#3490FD'} />,
      arrow: {
        isBackButton: true,
        isSaveButton: false,
      },
      onPressFunction: goBackCamera,
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

  const footerTabsConsts = [
    {
      id: 1,
      title: 'FILTER',
      onPressFunction: () => {
        setActiveTab({
          filter: true,
          edit: false,
        });
      },
      activeMode: isActiveTab.filter,
    },
    {
      id: 2,
      title: 'EDIT',
      onPressFunction: () => {
        setActiveTab({
          filter: false,
          edit: true,
        });
        navigation.navigate('Editor', {source: tempImage || sourceOfImage});
      },
      activeMode: isActiveTab.edit,
    },
  ];

  const extractedUri = useRef(sourceOfImage);
  const onExtractImage = ({nativeEvent}) => {
    extractedUri.current = nativeEvent.uri;
    setTempImage(nativeEvent.uri);
  };
  const onSelectFilter = selectedIndex => () => {
    setIndex(selectedIndex);
  };
  const renderFilterComponent = useCallback(({item, index}) => {
    const FilterComponent = item.filterComponent;
    const image = (
      <Image
        marginVertical={'5px'}
        source={{uri: sourceOfImage}}
        width={'100px'}
        height={'100px'}
        resizeMode={'contain'}
      />
    );
    return (
      <StyledButton onPress={onSelectFilter(index)} marginHorizontal={'5px'}>
        <StyledText textAlign={'center'} color={'#3490FD'}>
          {item.title}
        </StyledText>
        <FilterComponent image={image} />
      </StyledButton>
    );
  }, []);

  const SelectedFilterComponent = FILTERS[selectedFilterIndex].filterComponent;
  const keyExtractor = useCallback(item => {
    item.title;
  }, []);

  return (
    <SafeAreaView
      pt={StatusBar.currentHeight}
      backgroundColor={'white'}
      flex={1}
      justifyContent={'space-between'}>
      <Block>
        <Block flexDirection={'row'} justifyContent={'space-between'}>
          {filterHeaderNavigationButttons.map(button => (
            <HeaderNavigation {...button} />
          ))}
        </Block>
        <Block alignItems={'center'}>
          <Block
            marginHorizontal={'20px'}
            marginVertical={'20px'}
            justifyContent={'center'}
            alignItems={'center'}
            width={'300px'}
            height={'300px'}>
            {selectedFilterIndex === 0 ? (
              <Image
                source={{
                  uri: sourceOfImage,
                }}
                width={'100%'}
                height={'100%'}
                resizeMode={'contain'}
              />
            ) : (
              <SelectedFilterComponent
                style={{
                  marginHorizontal: 20,
                  marginVertical: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 300,
                  height: 300,
                }}
                onExtractImage={onExtractImage}
                extractImageEnabled={true}
                image={
                  <Image
                    source={{
                      uri: sourceOfImage,
                    }}
                    width={'100%'}
                    height={'100%'}
                    resizeMode={'contain'}
                  />
                }
              />
            )}
          </Block>
          {footerTabsConsts[0].activeMode && (
            <FlatList
              data={FILTERS}
              keyExtractor={keyExtractor}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={renderFilterComponent}
            />
          )}
        </Block>
      </Block>
      <FooterTabs footerTabsConsts={footerTabsConsts} />
    </SafeAreaView>
  );
};
