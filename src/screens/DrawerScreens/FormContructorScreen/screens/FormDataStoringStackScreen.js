import React from 'react';
import {SafeAreaView} from '../../../../common/simpleComponents/SafeAreaView';
import {StyledText} from '../../../../common/simpleComponents/Text';
import {useNavigation} from '@react-navigation/native';
import {Platform} from 'react-native';
import {StyledKeyboardAvoidingView} from '../../../../common/simpleComponents/KeyboardAvoidingView';
import {Block} from '../../../../common/simpleComponents/Block';
import {StyledScrollView} from '../../../../common/simpleComponents/StyledScrollView';
import {FormButton} from '../components/FormButton';
import {DataStoringField} from '../components/DataStoringField';
import {useSelector} from 'react-redux';

export const FormDataStoringStackScreen = () => {
  const {selectedForm} = useSelector(s => s.formListReducer);

  const navigation = useNavigation();

  const onBackToConstructor = () => {
    navigation.goBack();
  };
  const onBackToMain = () => {
    navigation.replace('FormCreator');
  };

  return (
    <SafeAreaView flex={1}>
      <StyledText
        marginVertical={'15px'}
        textAlign={'center'}
        fontSize={'20px'}
        color={'#86d681'}>
        DATA STORING
      </StyledText>
      <StyledText textAlign={'center'} fontSize={'16px'} color={'#86d681'}>
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
          paddingHorizontal={'10px'}
          paddingVertical={'10px'}
          borderRadius={'6px'}>
          <StyledScrollView showsVerticalScrollIndicator={false}>
            {selectedForm.fields.map(input => (
              <DataStoringField input={input} key={input.fieldId} />
            ))}
          </StyledScrollView>
        </Block>
      </StyledKeyboardAvoidingView>
      <Block flexDirection={'row'} justifyContent={'space-between'}>
        <FormButton
          onPressFunc={onBackToConstructor}
          align={'flex-start'}
          bgColor={'#86d681'}
          text={'Back'}
        />
        <FormButton
          onPressFunc={onBackToMain}
          align={'flex-end'}
          bgColor={'#86d681'}
          text={'Save'}
        />
      </Block>
    </SafeAreaView>
  );
};
