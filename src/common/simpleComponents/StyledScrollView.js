import styled from 'styled-components/native';
import {marginMixins, paddingMixins, borderMixins} from './mixins/mixins';
import PropTypes, {string, number} from 'prop-types';

export const StyledScrollView = styled.ScrollView`
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
