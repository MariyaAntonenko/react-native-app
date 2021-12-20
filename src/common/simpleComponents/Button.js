import styled from 'styled-components/native';
import {margin, padding, border} from './mixins/mixins';
import PropTypes, {number, string} from 'prop-types';

export const StyledButton = styled.TouchableOpacity`
  ${margin};
  ${padding};
  ${border};
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
  ${({boxShadow}) => boxShadow && `box-shadow: ${boxShadow}`};
  ${({outline}) => outline && `outline: ${outline}`};
  ${({position}) => position && `position: ${position}`};
  ${({top}) => top && `top: ${top}`};
  ${({left}) => left && `left: ${left}`};
  ${({right}) => right && `right: ${right}`};
  ${({bottom}) => bottom && `bottom: ${bottom}`};
`;

StyledButton.propTypes = {
  margin: string,
  padding: string,
  border: string,
  flex: number,
  backgroundColor: string,
  display: string,
  flexDirection: string,
  justifyContent: string,
  alignItems: string,
  width: string,
  height: string,
  borderRadius: string,
  boxShadow: string,
  outline: string,
  position: string,
  top: string,
  left: string,
  right: string,
};
