import React from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import RNPickerSelect from 'react-native-picker-select';
import DropDownIcon from '../../../../assets/icons/drop-down-4.svg';

export const FieldTypePicker = ({selectedFormType, setSelectedFormType}) => {
  return (
    <Block
      width={'70%'}
      justifyContent={'center'}
      alignItems={'center'}
      paddingHorizontal={'5px'}
      paddingVertical={'10px'}
      marginVertical={'5px'}
      marginHorizontal={'10px'}
      border={'1px solid #14C4AF'}
      borderRadius={'6px'}>
      <RNPickerSelect
        placeholder={{}}
        style={{
          inputAndroid: {
            backgroundColor: 'transparent',
            color: '#14C4AF',
          },
          inputIOS: {
            backgroundColor: 'transparent',
            color: '#14C4AF',
          },
          iconContainer: {
            top: 0,
            right: 0,
          },
        }}
        Icon={() => (
          <DropDownIcon width={'20px'} height={'20px'} fill={'#14C4AF'} />
        )}
        selectedValue={selectedFormType}
        onValueChange={itemValue => {
          setSelectedFormType(itemValue);
        }}
        items={[
          {label: 'Username', value: 'username'},
          {label: 'Email', value: 'emailAddress'},
          {label: 'Password', value: 'password'},
          {label: 'Country of residence', value: 'countryName'},
          {label: 'Telephone', value: 'telephoneNumber'},
        ]}
      />
    </Block>
  );
};
