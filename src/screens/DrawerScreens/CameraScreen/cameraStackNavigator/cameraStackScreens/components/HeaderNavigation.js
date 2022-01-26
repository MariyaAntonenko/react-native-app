import React from 'react';
import ArrowBack from '../../../../../../assets/icons/arrowLeft.svg';
import ArrowNext from '../../../../../../assets/icons/arrowRight.svg';
import {Block} from '../../../../../../common/simpleComponents/Block';
import {StyledButton} from '../../../../../../common/simpleComponents/Button';
import {StyledText} from '../../../../../../common/simpleComponents/Text';

export const HeaderNavigation = ({goBackCamera, onSavetoGallery}) => {
  const headerNavigationButttons = [
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
  return (
    <Block flexDirection={'row'} justifyContent={'space-between'}>
      {headerNavigationButttons.map(
        ({Icon, buttonText, onPressFunction, arrow}) => (
          <StyledButton
            onPress={onPressFunction}
            paddingVertical={'5px'}
            paddingHorizontal={'10px'}
            flexDirection={'row'}
            alignItems={'center'}>
            {arrow.isBackButton && (
              <Block paddingHorizontal={'3px'}>{Icon}</Block>
            )}
            <StyledText color={'#3490FD'} fontSize={'16px'}>
              {buttonText}
            </StyledText>
            {arrow.isSaveButton && (
              <Block paddingHorizontal={'3px'}>{Icon}</Block>
            )}
          </StyledButton>
        ),
      )}
    </Block>
  );
};
