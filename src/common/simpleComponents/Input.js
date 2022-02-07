import styled from 'styled-components/native';
import {marginMixins, paddingMixins, borderMixins} from './mixins/mixins';
import PropTypes, {string} from 'prop-types';

export const Input = styled.TextInput`
  ${marginMixins};
  ${paddingMixins};
  ${borderMixins};
  ${({paddingHorizontal}) =>
    paddingHorizontal && `paddingHorizontal: ${paddingHorizontal}`};
  ${({paddingVertical}) =>
    paddingVertical && `paddingVertical: ${paddingVertical}`};
  ${({marginHorizontal}) =>
    marginHorizontal && `marginHorizontal: ${marginHorizontal}`};
  ${({marginVertical}) =>
    marginVertical && `marginVertical: ${marginVertical}`};
  ${({backgroundColor}) =>
    backgroundColor && `background-color: ${backgroundColor}`};
  ${({width}) => width && `width: ${width}`};
  ${({height}) => height && `height: ${height}`};
  ${({color}) => color && `color: ${color}`};
  ${({fontSize}) => fontSize && `font-size: ${fontSize}`};
  ${({fontWeight}) => fontWeight && `font-weight: ${fontWeight}`};
`;

Input.propTypes = {
  marginHorizontal: string,
  marginVertical: string,
  paddingHorizontal: string,
  paddingVertical: string,
  margin: string,
  padding: string,
  border: string,
  backgroundColor: string,
  width: string,
  height: string,
  color: string,
  fontSize: string,
  fontWeight: string,
  borderBottomWidth: string,
  borderBottomStyle: string,
  borderBottomColor: string,
  borderTopWidth: string,
  borderTopStyle: string,
  borderTopColor: string,
  mt: string,
  mb: string,
  mr: string,
  ml: string,
  pt: string,
  pb: string,
  pr: string,
  pl: string,
};
