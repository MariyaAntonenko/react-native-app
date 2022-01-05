import styled from 'styled-components/native';
import {margin} from './mixins/mixins';
import PropTypes, {string} from 'prop-types';

export const Image = styled.Image`
  ${margin};
  ${({width}) => width && `width: ${width}`};
  ${({height}) => height && `height: ${height}`};
`;

Image.propTypes = {
  margin: string,
  width: string,
  height: string,
};
