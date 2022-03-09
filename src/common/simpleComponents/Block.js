import styled from 'styled-components/native';
import {marginMixins, paddingMixins, borderMixins} from './mixins/mixins';
import PropTypes, {string, number} from 'prop-types';

export const Block = styled.View`
  ${marginMixins};
  ${paddingMixins};
  ${borderMixins};
  ${({zIndex}) => zIndex && `zIndex: ${zIndex}`};
  ${({flexWrap}) => flexWrap && `flexWrap: ${flexWrap}`};
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
  ${({display}) => display && `display: ${display}`};
  ${({flex}) => flex && `flex: ${flex}`};
  ${({flexDirection}) => flexDirection && `flex-direction: ${flexDirection}`};
  ${({justifyContent}) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({alignItems}) => alignItems && `align-items: ${alignItems}`};
  ${({width}) => width && `width: ${width}`};
  ${({minWidth}) => minWidth && `minWidth: ${minWidth}`};
  ${({maxWidth}) => maxWidth && `maxWidth: ${maxWidth}`};
  ${({height}) => height && `height: ${height}`};
  ${({minHeight}) => minHeight && `minHeight: ${minHeight}`};
  ${({maxHeight}) => maxHeight && `maxHeight: ${maxHeight}`};
  ${({position}) => position && `position: ${position}`};
  ${({top}) => top && `top: ${top}`};
  ${({left}) => left && `left: ${left}`};
  ${({right}) => right && `right: ${right}`};
  ${({bottom}) => bottom && `bottom: ${bottom}`};
  ${({boxShadow}) => boxShadow && `box-shadow: ${boxShadow}`};
  ${({alignSelf}) => alignSelf && `alignSelf: ${alignSelf}`};
`;

Block.propTypes = {
  zIndex: number,
  flexWrap: string,
  marginHorizontal: string,
  marginVertical: string,
  paddingHorizontal: string,
  paddingVertical: string,
  margin: string,
  padding: string,
  border: string,
  backgroundColor: string,
  display: string,
  flex: number,
  flexDirection: string,
  justifyContent: string,
  alignItems: string,
  width: string,
  minWidth: string,
  maxWidth: string,
  height: string,
  minHeight: string,
  maxHeight: string,
  position: string,
  top: string,
  left: string,
  right: string,
  bottom: string,
  boxShadow: string,
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
  alignSelf: string,
};
