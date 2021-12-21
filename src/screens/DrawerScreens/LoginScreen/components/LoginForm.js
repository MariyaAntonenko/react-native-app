import React, {useState} from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import {StyledText} from '../../../../common/simpleComponents/Text';
import {Input} from '../../../../common/simpleComponents/Input';
import {StyledButton} from '../../../../common/simpleComponents/Button';
import ShowPassword from '../../../../assets/icons/showPassword.svg';
import HidePassword from '../../../../assets/icons/hidePassword.svg';
import {Formik} from 'formik';
import {loginValidationSchema} from './loginValidationSchema';
import {currentErrors} from './loginValidationSchema';

export const LoginForm = () => {
  const [issSecureEntry, setSecureEntry] = useState(true);
  const onTogglePassword = () => {
    setSecureEntry(prev => !prev);
  };
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
            <Block
              pb={'2%'}
              borderBottomWidth={'1px'}
              borderBottomColor={'#D1D1D1'}
              justifyContent={'flex-end'}>
              <StyledText color={'#D1D1D1'} fontSize={'15px'}>
                USERNAME
              </StyledText>
              <Input
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                mt={'7%'}
                fontSize={'15px'}
              />
            </Block>
            {errors.username && touched.username && (
              <Block flex={1} mt={'1%'}>
                <StyledText color={'red'}>{errors.username}</StyledText>
              </Block>
            )}
            <Block
              pr={'1%'}
              mt={'10%'}
              borderBottomWidth={'1px'}
              borderBottomColor={'#D1D1D1'}
              pb={'2%'}>
              <StyledText color={'#D1D1D1'} fontSize={'15px'}>
                PASSWORD
              </StyledText>
              <Block
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}>
                <Input
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  mt={'7%'}
                  fontSize={'15px'}
                  width={'90%'}
                  secureTextEntry={issSecureEntry}
                />
                {issSecureEntry ? (
                  <ShowPassword
                    width={40}
                    height={30}
                    fill={'#D1D1D1'}
                    onPress={onTogglePassword}
                  />
                ) : (
                  <HidePassword
                    width={40}
                    height={30}
                    fill={'#D1D1D1'}
                    onPress={onTogglePassword}
                  />
                )}
              </Block>
            </Block>
            {errors.password && touched.password && (
              <Block mt={'1%'}>
                {currentErrors.map((err, idx) => {
                  return (
                    <StyledText
                      color={err === errors.password ? 'red' : 'gray'}
                      key={idx}>
                      {err}
                    </StyledText>
                  );
                })}
              </Block>
            )}
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
