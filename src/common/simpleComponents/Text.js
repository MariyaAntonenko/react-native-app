import styled from 'styled-components/native';
import {marginMixins} from './mixins/mixins';
import PropTypes, {string} from 'prop-types';

export const StyledText = styled.Text`
  ${marginMixins};
  ${({color}) => color && `color: ${color}`};
  ${({fontSize}) => fontSize && `font-size: ${fontSize}`};
  ${({fontWeight}) => fontWeight && `font-weight: ${fontWeight}`};
  ${({textAlign}) => textAlign && `text-align: ${textAlign}`};
  ${({letterSpacing}) => letterSpacing && `letter-spacing: ${letterSpacing}`};
`;

StyledText.propTypes = {
  color: string,
  fontSize: string,
  fontWeight: string,
  textAlign: string,
  letterSpacing: string,
};
