import styled from 'styled-components/native';
import {margin, padding, border} from './mixins/mixins';
import PropTypes, {string, number} from 'prop-types';
import {Block} from './Block';

export const StyledScrollView = styled.ScrollView`
  ${margin};
  ${padding};
  ${border};
  ${({paddingHorizontal}) =>
    paddingHorizontal && `paddingHorizontal: ${paddingHorizontal}`};
  ${({paddingVertical}) =>
    paddingVertical && `paddingVertical: ${paddingVertical}`};
  ${({marginHorizontal}) =>
    marginHorizontal && `marginHorizontal: ${marginHorizontal}`};
  ${({marginVertical}) =>
    marginVertical && `marginVertical: ${marginVertical}`};
  ${({display}) => display && `display: ${display}`};
  ${({flex}) => flex && `flex: ${flex}`};
  ${({flexWrap}) => flexWrap && ` flexWrap: ${flexWrap}`};
  ${({flexDirection}) => flexDirection && `flex-direction: ${flexDirection}`};
  ${({justifyContent}) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({alignItems}) => alignItems && `align-items: ${alignItems}`};
`;

StyledScrollView.propTypes = {
  marginHorizontal: string,
  marginVertical: string,
  paddingHorizontal: string,
  paddingVertical: string,
  margin: string,
  padding: string,
  border: string,
  display: string,
  flex: number,
  flexWrap: string,
  flexDirection: string,
  justifyContent: string,
  alignItems: string,
};
