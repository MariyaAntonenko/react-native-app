import styled from 'styled-components/native';
import {margin, padding} from './mixins/mixins';

export const StyledHeaderButton = styled.TouchableOpacity`
  ${margin}
`;
export const StyledAmountButton = styled.TouchableOpacity`
  ${margin};
  border-radius: 40px;
  background-color: green;
  display: flex;
  align-items: center;
  width: 100px;
  height: 15px;
`;
export const StyledBottomButton = styled.TouchableOpacity`
  ${margin};
  ${padding};
  display: flex;
  align-items: center;
  border: 2px solid #678497;
  border-radius: 6px;
  width: 90%;
`;
