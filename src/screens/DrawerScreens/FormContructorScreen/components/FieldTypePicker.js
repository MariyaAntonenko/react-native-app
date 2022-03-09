import React from 'react';
import {Platform} from 'react-native';
import {Block} from '../../../../common/simpleComponents/Block';
import RNPickerSelect from 'react-native-picker-select';
import DropDownIcon from '../../../../assets/icons/drop-down-4.svg';
import {useDispatch} from 'react-redux';
import {addFieldType} from '../../../../../store/actions/actions';

export const FieldTypePicker = ({fieldData}) => {
  const dispatch = useDispatch();
  const handleType = itemValue => {
    dispatch(addFieldType(itemValue, fieldData.fieldId));
  };

  return (
    <Block
      width={'70%'}
      justifyContent={'center'}
      paddingHorizontal={'5px'}
      paddingVertical={Platform.OS === 'ios' ? '10px' : '5px'}
      marginVertical={'5px'}
      marginHorizontal={'10px'}
      border={'1px solid #14C4AF'}
      borderRadius={'6px'}>
      <RNPickerSelect
        placeholder={{}}
        useNativeAndroidPickerStyle={false}
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
            top: Platform.OS === 'ios' ? 0 : 15,
            right: 0,
          },
        }}
        Icon={() => (
          <DropDownIcon width={'20px'} height={'20px'} fill={'#14C4AF'} />
        )}
        value={fieldData.type}
        onValueChange={handleType}
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
