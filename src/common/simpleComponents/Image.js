import styled from 'styled-components/native';
import {margin} from './mixins/mixins';
import PropTypes, {string} from 'prop-types';

export const Image = styled.Image`
  ${margin};
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
  marginHorizontal: string,
  marginVertical: string,
  paddingHorizontal: string,
  paddingVertical: string,
  margin: string,
  width: string,
  height: string,
};
