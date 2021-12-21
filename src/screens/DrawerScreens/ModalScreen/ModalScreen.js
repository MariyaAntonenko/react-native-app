import React, {useState} from 'react';
import {SafeAreaView} from '../../../common/simpleComponents/SafeAreaView';
import {StyledText} from '../../../common/simpleComponents/Text';
import {Block} from '../../../common/simpleComponents/Block';
import {StyledButton} from '../../../common/simpleComponents/Button';
import {ModalWindow} from './components/ModalWindow';

export const ModalScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView flex={1}>
      <Block flex={1} alignItems={'center'} justifyContent={'center'}>
        <StyledButton padding={'2%'} onPress={toggleModal}>
          <StyledText fontSize={'40px'}>Open me:)</StyledText>
        </StyledButton>
      </Block>
      <ModalWindow isModalVisible={isModalVisible} toggleModal={toggleModal} />
    </SafeAreaView>
  );
};
