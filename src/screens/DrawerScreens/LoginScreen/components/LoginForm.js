import React from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import {StyledText} from '../../../../common/simpleComponents/Text';
import {StyledButton} from '../../../../common/simpleComponents/Button';
import {Formik} from 'formik';
import {loginValidationSchema} from './loginValidationSchema';
import {loginFormConsts} from '../../../../common/consts';
import {LoginFormElem} from './LoginFormElem';

export const LoginForm = () => {
  const onSubmitForm = (data, {resetForm}) => {
    console.log(data);
    resetForm();
  };
  return (
    <Block pt={'10%'} pl={'10%'} pr={'10%'}>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validateOnMount={true}
        onSubmit={onSubmitForm}
        validationSchema={loginValidationSchema}>
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <>
            {loginFormConsts.map(itemData => (
              <LoginFormElem
                {...itemData}
                key={itemData.id}
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values}
                errors={errors}
                touched={touched}
              />
            ))}
            <StyledButton
              disabled={!isValid}
              onPress={handleSubmit}
              mt={'10%'}
              backgroundColor={isValid ? '#013556' : 'gray'}
              height={'55px'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}>
              <StyledText color={'white'}>LOGIN</StyledText>
            </StyledButton>
          </>
        )}
      </Formik>
    </Block>
  );
};
