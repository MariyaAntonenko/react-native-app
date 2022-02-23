import React, {useState} from 'react';
import {Block} from '../../../../common/simpleComponents/Block';
import {StyledText} from '../../../../common/simpleComponents/Text';
import {Input} from '../../../../common/simpleComponents/Input';

export const DataCreationField = ({input, setValues, values, labelColor}) => {
  const [fieldValue, setFieldValue] = useState('');
  const handleFieldContent = text => {
    setFieldValue(text);
  };
  const storeData = () => {};

  return (
    <Block>
      <StyledText color={labelColor} marginVertical={'10px'}>
        {input.label}
      </StyledText>
      <Input
        autoFocus
        defaultValue={fieldValue}
        textContentType={input.value}
        placeholder={input.placeholder}
        border={'0.2px solid gray'}
        borderRadius={'6px'}
        paddingVertical={'10px'}
        paddingHorizontal={'10px'}
        marginVertical={'5px'}
        secureTextEntry={input.value === 'password'}
        onChangeText={handleFieldContent}
        onSubmitEditing={storeData}
      />
    </Block>
  );
};
