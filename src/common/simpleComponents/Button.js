import styled from 'styled-components/native';
import {margin, padding} from './mixins/mixins';
import PropTypes, {number, string} from 'prop-types';

export const StyledButton = styled.TouchableOpacity`
  ${margin};
  ${padding};
  ${({flex}) => flex && `flex: ${flex}`};
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
  ${({boxShadow}) => boxShadow && `box-shadow: ${boxShadow}`};
  ${({outline}) => outline && `border: ${outline}`};
`;

StyledButton.propTypes = {
  flex: number,
  backgroundColor: string,
  display: string,
  flexDirection: string,
  justifyContent: string,
  alignItems: string,
  width: string,
  height: string,
  border: string,
  borderRadius: string,
  boxShadow: string,
  outline: string,
};
