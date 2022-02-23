import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView} from '../../../../common/simpleComponents/SafeAreaView';
import {StyledText} from '../../../../common/simpleComponents/Text';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Platform} from 'react-native';
import {StyledKeyboardAvoidingView} from '../../../../common/simpleComponents/KeyboardAvoidingView';
import {Block} from '../../../../common/simpleComponents/Block';
import {StyledScrollView} from '../../../../common/simpleComponents/StyledScrollView';
import {FormButton} from '../components/FormButton';
import {DataCreationField} from '../components/DataCreationField';
import {FormContext} from '../FormConstructorScreen';

export const FormDataStoringStackScreen = () => {
  const [values, setValues] = useState([]);
  const [formData, setFormData] = useState([]);
  const {formList, setFormList, safeToStorage, selectedForm} =
    useContext(FormContext);
  console.log('formList>>>>', formList);
  const route = useRoute();
  const navigation = useNavigation();

  const onBackToConstructor = () => {
    navigation.goBack();
  };
  // useEffect(() => {
  //   let isMounted = true;
  //   const getRecievedForm = async () => {
  //     try {
  //       const jsonData = await AsyncStorage.getItem('form-list');
  //       return jsonData !== null ? JSON.parse(jsonData) : null;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getRecievedForm().then(res => {
  //     if (isMounted) setFormData(res);
  //     console.log(formData);
  //     res.map(form => {
  //       form.id === formId ? setFormName(form.title) : null;
  //     });
  //   });
  //   return () => {
  //     isMounted = false;
  //   };
  // }, [formData, formName]);

  // useEffect(() => {
  //   let isMounted = true;
  //   isMounted &&
  //     formData !== null &&
  //     setFormData(prev =>
  //       prev.map(form => {
  //         if (form.id === formId) {
  //           return {...form, fields: fields, filledFields};
  //         }
  //         return form;
  //       }),
  //     );
  //   return () => {
  //     isMounted = false;
  //   };
  // }, [fields]);
  //
  // useEffect(() => {
  //   let isMounted = true;
  //   // console.log(formData);
  //   setFormData(prev =>
  //     prev.map(form => {
  //       if (form.id === formId) {
  //         return {...form, fields: fields};
  //       }
  //       return form;
  //     }),
  //   );
  //   let stringFormList = JSON.stringify(formData);
  //   if (isMounted) AsyncStorage.setItem('form-list', stringFormList);
  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  // const getRecievedForm = async () => {
  //   try {
  //     const jsonData = await AsyncStorage.getItem('form-list');
  //     return jsonData !== null ? JSON.parse(jsonData) : null;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // getRecievedForm().then(res => {
  // console.log(res);
  // console.log(formData);

  // res.map(form => {
  //   form.id === formId ? setFormName(form.title) : null;
  // });
  // });

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
          border={'0.5px solid gray'}
          marginHorizontal={'20px'}
          paddingHorizontal={'10px'}
          paddingVertical={'10px'}
          borderRadius={'6px'}>
          <StyledScrollView>
            {selectedForm.fields.map(input => (
              <DataCreationField
                input={input}
                key={input.id}
                labelColor={'#86d681'}
                values={values}
                setValues={setValues}
              />
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
      </Block>
    </SafeAreaView>
  );
};
