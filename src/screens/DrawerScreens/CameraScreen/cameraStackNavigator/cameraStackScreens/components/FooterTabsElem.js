import React from 'react';
import {StyledButton} from '../../../../../../common/simpleComponents/Button';
import {StyledText} from '../../../../../../common/simpleComponents/Text';

export const FooterTabsElem = ({tab}) => {
  return (
    <StyledButton
      onPress={tab.onPressFunction}
      accessibilityRole={'tab'}
      borderBottomWidth={tab.activeMode && '1px'}
      width={'50%'}
      alignItems={'center'}
      paddingVertical={'10px'}>
      <StyledText fontSize={'17px'} color={tab.activeMode ? 'black' : 'gray'}>
        {tab.title}
      </StyledText>
    </StyledButton>
  );
};
