import React, {useContext} from 'react';
import {FormContext} from '../FormConstructorScreen';
import {SafeAreaView} from '../../../../common/simpleComponents/SafeAreaView';
import {StyledText} from '../../../../common/simpleComponents/Text';
import {Platform} from 'react-native';
import {Block} from '../../../../common/simpleComponents/Block';
import PlusIcon from '../../../../assets/icons/plus-creator.svg';
import {StyledKeyboardAvoidingView} from '../../../../common/simpleComponents/KeyboardAvoidingView';
import {StyledScrollView} from '../../../../common/simpleComponents/StyledScrollView';
import {StyledButton} from '../../../../common/simpleComponents/Button';
import {CreatorField} from '../components/CreatorField';

export const FormCreatorStackScreen = () => {
  const {formList, setFormList, safeToStorage} = useContext(FormContext);

  console.log('FORMLIST CREATOR>>', formList);

  const addForm = () => {
    setFormList([...formList, {id: Date.now(), fields: []}]);
    safeToStorage(formList);
  };

  return (
    <SafeAreaView flex={1}>
      <StyledText
        marginVertical={'20px'}
        textAlign={'center'}
        fontSize={'20px'}
        color={'#f078cc'}>
        FORM CREATOR
      </StyledText>
      <StyledKeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        flex={1}>
        <Block
          flex={1}
          border={'0.5px solid gray'}
          marginHorizontal={'20px'}
          paddingHorizontal={'10px'}
          paddingVertical={'10px'}
          borderRadius={'6px'}>
          <StyledButton onPress={addForm} width={'50px'}>
            <PlusIcon width={'30px'} height={'30px'} fill={'#f078cc'} />
          </StyledButton>
          <StyledScrollView>
            {formList.map(form => (
              <CreatorField key={form.id} form={form} />
            ))}
          </StyledScrollView>
        </Block>
      </StyledKeyboardAvoidingView>
    </SafeAreaView>
  );
};
