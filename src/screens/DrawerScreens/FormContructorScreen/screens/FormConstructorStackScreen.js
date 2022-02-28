import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyledText} from '../../../../common/simpleComponents/Text';
import {Platform} from 'react-native';
import PlusIcon from '../../../../assets/icons/plus-creator.svg';
import {Block} from '../../../../common/simpleComponents/Block';
import {StyledButton} from '../../../../common/simpleComponents/Button';
import {StyledScrollView} from '../../../../common/simpleComponents/StyledScrollView';
import {StyledKeyboardAvoidingView} from '../../../../common/simpleComponents/KeyboardAvoidingView';
import {ConstructorField} from '../components/ConstructorField';
import {FormButton} from '../components/FormButton';
import {FormContext} from '../FormConstructorScreen';
import {FieldTypePicker} from '../components/FieldTypePicker';

export const FormConstructorStackScreen = () => {
  const navigation = useNavigation();
  const {formList, setFormList, safeToStorage, selectedForm, setSelectedForm} =
    useContext(FormContext);

  const addField = () => {
    setSelectedForm({
      ...selectedForm,
      fields: [
        ...selectedForm.fields,
        {
          label: '',
          placeholder: '',
          type: 'username',
          fieldId: Date.now(),
        },
      ],
    });
  };
  const onBuildForm = () => {
    setFormList(
      formList.map(form => {
        if (form.id === selectedForm.id) {
          return selectedForm;
        }
        return form;
      }),
    );
    safeToStorage(formList, 'form-list');
    navigation.navigate('FormDataStoring');
  };
  const goBackCreator = () => {
    setFormList(
      formList.map(form => {
        if (form.id === selectedForm.id) {
          return selectedForm;
        }
        return form;
      }),
    );
    safeToStorage(formList, 'form-list');
    navigation.goBack();
  };

  return (
    <Block flex={1}>
      <StyledText
        marginVertical={'15px'}
        textAlign={'center'}
        fontSize={'20px'}
        color={'#14C4AF'}>
        FORM CONSTRUCTOR
      </StyledText>
      <StyledText textAlign={'center'} fontSize={'16px'} color={'#14C4AF'}>
        {selectedForm.title || 'User Form'}
      </StyledText>
      <StyledKeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        flex={1}
        mt={'10px'}>
        <Block
          flex={1}
          border={'1px solid gray'}
          marginHorizontal={'20px'}
          borderRadius={'6px'}>
          <StyledButton
            onPress={addField}
            paddingVertical={'10px'}
            paddingHorizontal={'10px'}>
            <PlusIcon width={'30px'} height={'30px'} fill={'#14C4AF'} />
          </StyledButton>
          <StyledScrollView showsVerticalScrollIndicator={false}>
            {selectedForm.fields.map(fieldData => (
              <Block
                key={fieldData.fieldId}
                border={'1px solid gray'}
                paddingVertical={'10px'}
                borderRadius={'9px'}
                marginVertical={'5px'}
                marginHorizontal={'5px'}>
                <FieldTypePicker fieldData={fieldData} />
                <ConstructorField fieldData={fieldData} />
              </Block>
            ))}
          </StyledScrollView>
        </Block>
      </StyledKeyboardAvoidingView>
      <Block flexDirection={'row'} justifyContent={'space-between'}>
        <FormButton
          onPressFunc={goBackCreator}
          bgColor={'#14C4AF'}
          align={'flex-start'}
          text={'Back'}
        />
        <FormButton
          onPressFunc={onBuildForm}
          bgColor={'#14C4AF'}
          align={'flex-end'}
          text={'Build Form'}
        />
      </Block>
    </Block>
  );
};
