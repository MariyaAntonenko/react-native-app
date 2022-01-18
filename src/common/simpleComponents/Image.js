import styled from 'styled-components/native';
import {marginMixins} from './mixins/mixins';
import PropTypes, {string} from 'prop-types';

export const Image = styled.Image`
  ${marginMixins};
  ${({resizeMode}) => resizeMode && `resizeMode: ${resizeMode}`};
  ${({paddingHorizontal}) =>
    paddingHorizontal && `paddingHorizontal: ${paddingHorizontal}`};
  ${({paddingVertical}) =>
    paddingVertical && `paddingVertical: ${paddingVertical}`};
  ${({marginHorizontal}) =>
    marginHorizontal && `marginHorizontal: ${marginHorizontal}`};
  ${({marginVertical}) =>
    marginVertical && `marginVertical: ${marginVertical}`};
  ${({width}) => width && `width: ${width}`};
  ${({height}) => height && `height: ${height}`};
`;

Image.propTypes = {
  resizeMode: string,
  marginHorizontal: string,
  marginVertical: string,
  paddingHorizontal: string,
  paddingVertical: string,
  margin: string,
  width: string,
  height: string,
};
