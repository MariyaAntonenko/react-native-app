import React, {useState} from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import {StyledText} from '../../../../common/simpleComponents/Text';
import {Input} from '../../../../common/simpleComponents/Input';
import {StyledButton} from '../../../../common/simpleComponents/Button';
import ShowPassword from '../../../../assets/icons/showPassword.svg';
import HidePassword from '../../../../assets/icons/hidePassword.svg';

export const LoginForm = () => {
  const [issSecureEntry, setSecureEntry] = useState(true);
  const onTogglePassword = () => {
    setSecureEntry(prev => !prev);
  };
  return (
    <>
      <Block
        borderBottomWidth={'1px'}
        borderBottomColor={'#D1D1D1'}
        pb={'10px'}>
        <StyledText color={'#D1D1D1'} fontSize={'15px'}>
          USERNAME
        </StyledText>
        <Input mt={'15px'} fontSize={'15px'} />
      </Block>
      <Block
        pr={'10px'}
        mt={'25px'}
        borderBottomWidth={'1px'}
        borderBottomColor={'#D1D1D1'}
        pb={'10px'}>
        <StyledText color={'#D1D1D1'} fontSize={'15px'}>
          PASSWORD
        </StyledText>
        <Block
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}>
          <Input
            mt={'15px'}
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
      <StyledButton
        mt={'20px'}
        backgroundColor={'#013556'}
        height={'55px'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}>
        <StyledText color={'white'}>LOGIN</StyledText>
      </StyledButton>
    </>
  );
};
