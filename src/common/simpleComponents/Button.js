import styled from 'styled-components/native';
import {marginMixins, paddingMixins, borderMixins} from './mixins/mixins';
import PropTypes, {number, string} from 'prop-types';

export const StyledButton = styled.TouchableOpacity`
  ${marginMixins};
  ${paddingMixins};
  ${borderMixins};
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
