import styled from 'styled-components/native';
import {margin} from './mixins/mixins';
import PropTypes, {string} from 'prop-types';

export const ArticleImage = styled.Image`
  ${margin};
  ${({width}) => width && `width: ${width}`};
  ${({height}) => height && `height: ${height}`};
`;

ArticleImage.propTypes = {
  width: string,
  height: string,
};
