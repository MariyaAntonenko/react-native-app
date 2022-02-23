import React from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import {StyledText} from '../../../../common/simpleComponents/Text';
import {StyledButton} from '../../../../common/simpleComponents/Button';
import Cross from '../../../../assets/icons/cross.svg';
import Modal from 'react-native-modal';

interface ModalProps {
  isModalVisible: boolean;
  toggleModal: () => void;
}

export const ModalWindow = ({isModalVisible, toggleModal}: ModalProps) => {
  return (
    <Modal
      onSwipeComplete={toggleModal}
      swipeDirection={['up', 'down']}
      animationOut="slideInUp"
      isVisible={isModalVisible}>
      <Block flex={1} alignItems={'center'} justifyContent={'center'}>
        <Block
          flexDirection={'row'}
          backgroundColor={'white'}
          borderRadius={'9px'}
          paddingVertical={'60px'}
          paddingHorizontal={'60px'}>
          <StyledText color={'black'} fontSize={'40px'}>
            Close me:(
          </StyledText>
          <StyledButton position={'absolute'} right={'0'} onPress={toggleModal}>
            <Cross width={25} height={25} fill={'red'} />
          </StyledButton>
        </Block>
      </Block>
    </Modal>
  );
};
