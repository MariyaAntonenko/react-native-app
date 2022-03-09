import React from 'react';
import {Input} from '../simpleComponents/Input';
import {Block} from '../simpleComponents/Block';

export const CustomInput = ({onFocusLost, ...props}) => {
  return (
    <Block onPress={onFocusLost} accessible={false}>
      <Input {...props} />
    </Block>
  );
};
