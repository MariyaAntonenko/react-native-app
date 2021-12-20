import React, {useState} from 'react';
import {SafeAreaView} from '../../../common/simpleComponents/SafeAreaView';
import {StyledText} from '../../../common/simpleComponents/Text';
import Modal from 'react-native-modal';
import Cross from '../../../assets/icons/cross.svg';
import {Block} from '../../../common/simpleComponents/Block';
import {StyledButton} from '../../../common/simpleComponents/Button';

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
      <Modal
        onSwipeComplete={toggleModal}
        swipeDirection={['up', 'down']}
        transparent={true}
        animationType="slideInUp"
        isVisible={isModalVisible}>
        <Block
          flex={1}
          padding={'1%'}
          alignItems={'center'}
          justifyContent={'center'}>
          <Block
            flexDirection={'row'}
            backgroundColor={'white'}
            borderRadius={'9px'}
            padding={'20%'}>
            <StyledText color={'black'} fontSize={'40px'}>
              Close me:(
            </StyledText>
            <StyledButton
              position={'absolute'}
              right={'0'}
              onPress={toggleModal}>
              <Cross width={25} height={25} fill={'red'} />
            </StyledButton>
          </Block>
        </Block>
      </Modal>
    </SafeAreaView>
  );
};
