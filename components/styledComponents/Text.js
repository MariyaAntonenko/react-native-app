import styled from 'styled-components/native';
import {margin} from './mixins/mixins';

export const StyledText = styled.Text`
  ${margin};
  color: ${props => props.color};
  font-size: ${props => props.fz};
  font-weight: ${props => props.fw};
  letter-spacing: -0.5px;
`;

export const StyledTitle = styled.Text`
  ${margin};
  color: ${props => props.color};
  font-weight: 700;
  font-size: 16px;
`;
