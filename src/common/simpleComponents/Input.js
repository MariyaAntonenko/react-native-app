import styled from 'styled-components/native';
import {marginMixins, paddingMixins, borderMixins} from './mixins/mixins';
import PropTypes, {number, string} from 'prop-types';

export const Input = styled.TextInput`
  ${marginMixins};
  ${paddingMixins};
  ${borderMixins}
  ${({backgroundColor}) =>
    backgroundColor && `background-color: ${backgroundColor}`};
  ${({width}) => width && `width: ${width}`};
  ${({height}) => height && `height: ${height}`};
  ${({color}) => color && `color: ${color}`};
  ${({fontSize}) => fontSize && `font-size: ${fontSize}`};
  ${({fontWeight}) => fontWeight && `font-weight: ${fontWeight}`};
`;

Input.propTypes = {
  backgroundColor: string,
  width: string,
  height: string,
  color: string,
  fontSize: string,
  fontWeight: string,
};
