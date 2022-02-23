import React, {useContext, useMemo, useState} from 'react';
import {StyledButton} from '../../../../common/simpleComponents/Button';
import {StyledText} from '../../../../common/simpleComponents/Text';
import {Input} from '../../../../common/simpleComponents/Input';
import RemoveFieldIcon from '../../../../assets/icons/remove-46.svg';
import {Block} from '../../../../common/simpleComponents/Block';
import {FormContext} from '../FormConstructorScreen';
import {useNavigation} from '@react-navigation/native';

export const CreatorField = ({form}) => {
  const [formName, setFormName] = useState('');
  const navigation = useNavigation();
  const {formList, setFormList, safeToStorage, setSelectedForm} =
    useContext(FormContext);
  const index = useMemo(() => {
    return formList.findIndex(formItem => formItem.id === form.id);
  }, [formList]);
  const handleFormName = text => {
    setFormName(text);
  };
  const handleStorageUpdate = e => {
    console.log('EVENT', e);
    setFormList(prev =>
      prev.map(formData => {
        if (formData.id === form.id) {
          return {...formData, title: formName};
        }
        return formData;
      }),
    );
    safeToStorage(formList);
  };
  const removeForm = () => {
    const filteredForm = formList.filter(formItem => formItem.id !== form.id);
    setFormList(filteredForm);
    safeToStorage(filteredForm);
  };

  const goToConstructor = id => {
    safeToStorage(formList);
    setSelectedForm(formList.find(item => item.id === id));
    navigation.navigate('FormConstructor');
  };

  return (
    <Block
      paddingVertical={'50px'}
      marginVertical={'10px'}
      border={'0.3px solid gray'}
      borderRadius={'6px'}>
      <StyledButton onPress={() => goToConstructor(form.id)}>
        <StyledText color={'gray'} fontSize={'20px'} textAlign={'center'}>
          FORM {index + 1}
        </StyledText>
      </StyledButton>
      <Input
        autofocus
        defaultValue={form.title || ''}
        textAlign={'center'}
        onChangeText={handleFormName}
        paddingHorizontal={'10px'}
        paddingVertical={'10px'}
        marginHorizontal={'10px'}
        marginVertical={'10px'}
        border={'0.3px solid gray'}
        // onBlur={handleStorageUpdate}
        // onPressOut={handleStorageUpdate}
        onFocus={handleStorageUpdate}
      />
      <StyledButton
        onPress={removeForm}
        position={'absolute'}
        alignSelf={'flex-end'}
        top={'10px'}
        right={'10px'}>
        <RemoveFieldIcon width={'20px'} height={'20px'} fill={'red'} />
      </StyledButton>
    </Block>
  );
};
