import styled from 'styled-components/native';
import {margin, padding} from './mixins/mixins';
import PropTypes, {string} from 'prop-types';

export const StyledButton = styled.TouchableOpacity`
  ${margin};
  ${padding};
  ${({backgroundColor}) =>
    backgroundColor && `background-color: ${backgroundColor}`};
  ${({display}) => display && `display: ${display}`};
  ${({flexDirection}) => flexDirection && `flex-direction: ${flexDirection}`};
  ${({justifyContent}) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({alignItems}) => alignItems && `align-items: ${alignItems}`};
  ${({width}) => width && `width: ${width}`};
  ${({height}) => height && `height: ${height}`};
  ${({borderRadius}) => borderRadius && `border-radius: ${borderRadius}`};
  ${({border}) => border && `border: ${border}`};
`;

StyledButton.propTypes = {
  backgroundColor: string,
  display: string,
  flexDirection: string,
  justifyContent: string,
  alignItems: string,
  width: string,
  height: string,
  border: string,
  borderRadius: string,
};
