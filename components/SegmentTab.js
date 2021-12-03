import React, {useState} from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {Block} from './styledComponents/Block';
import {StyledButton} from './styledComponents/Button';

export const SegmentControls = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleIndexChange = index => {
    setSelectedIndex(index);
  };

  return (
    <Block>
      <StyledButton>
        <SegmentedControlTab
          values={['Cartons', 'Articles']}
          selectedIndex={selectedIndex}
          onTabPress={index => handleIndexChange(index)}
        />
      </StyledButton>
    </Block>
  );
};
