import React from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import {StyledText} from '../../../../common/simpleComponents/Text';
import {Input} from '../../../../common/simpleComponents/Input';
import {StyledButton} from '../../../../common/simpleComponents/Button';
import RemoveFieldIcon from '../../../../assets/icons/remove-46.svg';
import {useDispatch} from 'react-redux';
import {
  removeField,
  addFieldLabelPlaceholder,
} from '../../../../../store/actions/actions';

export const ConstructorField = ({fieldData}) => {
  const dispatch = useDispatch();

  const handleFieldUpdate = dataKey => text => {
    dispatch(addFieldLabelPlaceholder(dataKey, text, fieldData.fieldId));
  };
  const removeFormField = () => {
    dispatch(removeField(fieldData.fieldId));
  };

  return (
    <Block flexDirection={'row'} justifyContent={'space-around'}>
      <Block>
        <StyledText color={'gray'}>Enter title of your field</StyledText>
        <Input
          autoFocus
          value={fieldData.label}
          border={'1px solid gray'}
          borderRadius={'6px'}
          paddingVertical={'5px'}
          paddingHorizontal={'5px'}
          marginVertical={'5px'}
          onChangeText={handleFieldUpdate('label')}
        />
        <StyledText color={'gray'}>
          Enter start input text of your field
        </StyledText>
        <Input
          value={fieldData.placeholder}
          border={'1px solid gray'}
          borderRadius={'6px'}
          paddingVertical={'5px'}
          paddingHorizontal={'5px'}
          marginVertical={'5px'}
          onChangeText={handleFieldUpdate('placeholder')}
        />
      </Block>
      <StyledButton onPress={removeFormField}>
        <RemoveFieldIcon width={'20px'} height={'20px'} fill={'red'} />
      </StyledButton>
    </Block>
  );
};
