import styled from 'styled-components/native';
import {marginMixins} from './mixins/mixins';
import PropTypes, {string} from 'prop-types';

export const ArticleImage = styled.Image`
  ${marginMixins};
  ${({width}) => width && `width: ${width}`};
  ${({height}) => height && `height: ${height}`};
`;

ArticleImage.propTypes = {
  width: string,
  height: string,
};
