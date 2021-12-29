import styled from 'styled-components/native';
import {border, margin, padding} from './mixins/mixins';
import PropTypes, {string} from 'prop-types';

export const Input = styled.TextInput`
  ${margin};
  ${padding};
  ${border}
  ${({backgroundColor}) =>
    backgroundColor && `background-color: ${backgroundColor}`};
  ${({width}) => width && `width: ${width}`};
  ${({height}) => height && `height: ${height}`};
  ${({color}) => color && `color: ${color}`};
  ${({fontSize}) => fontSize && `font-size: ${fontSize}`};
  ${({fontWeight}) => fontWeight && `font-weight: ${fontWeight}`};
`;

Input.propTypes = {
  margin: string,
  padding: string,
  border: string,
  backgroundColor: string,
  width: string,
  height: string,
  color: string,
  fontSize: string,
  fontWeight: string,
};
