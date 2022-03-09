import React, {useState} from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import {StyledText} from '../../../../common/simpleComponents/Text';
import {Input} from '../../../../common/simpleComponents/Input';
import ShowPassword from '../../../../assets/icons/showPassword.svg';
import HidePassword from '../../../../assets/icons/hidePassword.svg';
import {currentErrors} from './loginValidationSchema';

export const LoginFormElem = ({
  label,
  hasShowPasswordIcon,
  isPassword,
  marginTop,
  handleBlur,
  handleChange,
  values,
  errors,
  touched,
}) => {
  const [issSecureEntry, setSecureEntry] = useState(true);
  const onTogglePassword = () => {
    setSecureEntry(prev => !prev);
  };
  return (
    <>
      <Block
        mt={marginTop}
        borderBottomWidth={'1px'}
        borderBottomColor={'#D1D1D1'}
        pb={'10px'}>
        <StyledText color={'#D1D1D1'} fontSize={'15px'}>
          {label.toUpperCase()}
        </StyledText>
        {hasShowPasswordIcon ? (
          <Block
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Input
              onChangeText={handleChange(label)}
              onBlur={handleBlur(label)}
              value={values[label]}
              mt={'25px'}
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
        ) : (
          <Input
            onChangeText={handleChange(label)}
            onBlur={handleBlur(label)}
            value={values[label]}
            mt={'25px'}
            fontSize={'15px'}
          />
        )}
      </Block>
      {errors[label] &&
        touched[label] &&
        (isPassword ? (
          <Block mt={'5px'}>
            {currentErrors.map((err, idx) => {
              return (
                <StyledText
                  color={err === errors[label] ? 'red' : 'gray'}
                  key={idx}>
                  {err}
                </StyledText>
              );
            })}
          </Block>
        ) : (
          <Block mt={'5px'}>
            <StyledText color={'red'}>{errors[label]}</StyledText>
          </Block>
        ))}
    </>
  );
};
