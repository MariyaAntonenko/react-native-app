import React from 'react';
import {SafeAreaView} from '../../../../common/simpleComponents/SafeAreaView';
import {StyledText} from '../../../../common/simpleComponents/Text';
import {Platform} from 'react-native';
import {Block} from '../../../../common/simpleComponents/Block';
import PlusIcon from '../../../../assets/icons/plus-creator.svg';
import {StyledKeyboardAvoidingView} from '../../../../common/simpleComponents/KeyboardAvoidingView';
import {StyledScrollView} from '../../../../common/simpleComponents/StyledScrollView';
import {StyledButton} from '../../../../common/simpleComponents/Button';
import {CreatorField} from '../components/CreatorField';
import {useSelector, useDispatch} from 'react-redux';
import {addForm} from '../../../../../store/actions/actions';

export const FormCreatorStackScreen = () => {
  const {formList} = useSelector(s => s.formListReducer);
  const dispatch = useDispatch();

  const addNewForm = () => {
    dispatch(addForm());
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
          border={'1px solid gray'}
          marginHorizontal={'20px'}
          marginVertical={'5px'}
          paddingHorizontal={'10px'}
          paddingVertical={'10px'}
          borderRadius={'6px'}>
          <StyledButton onPress={addNewForm} width={'50px'}>
            <PlusIcon width={'30px'} height={'30px'} fill={'#f078cc'} />
          </StyledButton>
          <StyledScrollView showsVerticalScrollIndicator={false}>
            {formList.map(form => (
              <CreatorField key={form.id} form={form} />
            ))}
          </StyledScrollView>
        </Block>
      </StyledKeyboardAvoidingView>
    </SafeAreaView>
  );
};
