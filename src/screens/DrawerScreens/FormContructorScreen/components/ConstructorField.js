import React, {useContext} from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import {StyledText} from '../../../../common/simpleComponents/Text';
import {Input} from '../../../../common/simpleComponents/Input';
import {StyledButton} from '../../../../common/simpleComponents/Button';
import RemoveFieldIcon from '../../../../assets/icons/remove-46.svg';
import {FormContext} from '../FormConstructorScreen';

export const ConstructorField = ({fieldData, setSelectedFields}) => {
  const {formList, setFormList, safeToStorage, selectedForm, setSelectedForm} =
    useContext(FormContext);
  const handleFieldUpdate = dataKey => text => {
    setSelectedFields(prev =>
      prev.map(field => {
        const outputValue = {...field};
        if (field.id === fieldData.id) {
          outputValue[dataKey] = text;
        }
        return outputValue;
      }),
    );
  };
  const removeField = () => {
    setSelectedFields(
      selectedForm.fields.filter(field => field.id !== fieldData.id),
    );
  };

  return (
    <Block flexDirection={'row'} justifyContent={'space-around'}>
      <Block>
        <StyledText color={'gray'}>Enter title of your field</StyledText>
        <Input
          autoFocus
          value={fieldData.label}
          border={'0.2px solid gray'}
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
          border={'0.2px solid gray'}
          borderRadius={'6px'}
          paddingVertical={'5px'}
          paddingHorizontal={'5px'}
          marginVertical={'5px'}
          onChangeText={handleFieldUpdate('placeholder')}
        />
      </Block>
      <StyledButton onPress={removeField}>
        <RemoveFieldIcon width={'20px'} height={'20px'} fill={'red'} />
      </StyledButton>
    </Block>
  );
};
