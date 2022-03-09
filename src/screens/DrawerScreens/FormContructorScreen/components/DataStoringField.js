import React from 'react';
import {set, clone} from 'lodash';
import {Block} from '../../../../common/simpleComponents/Block';
import {StyledText} from '../../../../common/simpleComponents/Text';
import {Input} from '../../../../common/simpleComponents/Input';
import {useDispatch, useSelector} from 'react-redux';
import {saveFormList} from '../../../../../store/actions/actions';

export const DataStoringField = ({input}) => {
  const dispatch = useDispatch();
  const {formList, selectedForm} = useSelector(s => s.formListReducer);
  let cloneOfFormList = clone(formList);
  let cloneOfSelectedForm = cloneOfFormList.find(
    form => form.id === selectedForm.id,
  );
  let cloneOfField = cloneOfSelectedForm.fields.find(
    field => field.fieldId === input.fieldId,
  );
  let pathToFieldData = 'filledFieldsData';

  const handleFieldContent = text => {
    set(cloneOfField, pathToFieldData, text);
    dispatch(saveFormList(cloneOfFormList, 'filled-form-list'));
  };

  return (
    <Block>
      <StyledText color={'#86d681'} marginVertical={'10px'}>
        {input.label}
      </StyledText>
      <Input
        autoFocus
        defaultValue={cloneOfField.filledFieldsData}
        textContentType={input.type}
        placeholder={input.placeholder}
        border={'1px solid gray'}
        borderRadius={'6px'}
        paddingVertical={'10px'}
        paddingHorizontal={'10px'}
        marginVertical={'5px'}
        secureTextEntry={input.type === 'password'}
        onChangeText={handleFieldContent}
      />
    </Block>
  );
};
