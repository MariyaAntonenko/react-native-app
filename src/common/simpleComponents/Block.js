import styled from 'styled-components/native';
import {marginMixins, paddingMixins, borderMixins} from './mixins/mixins';
import PropTypes, {string, number} from 'prop-types';

export const Block = styled.View`
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
  ${({display}) => display && `display: ${display}`};
  ${({flex}) => flex && `flex: ${flex}`};
  ${({flexDirection}) => flexDirection && `flex-direction: ${flexDirection}`};
  ${({justifyContent}) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({alignItems}) => alignItems && `align-items: ${alignItems}`};
  ${({width}) => width && `width: ${width}`};
  ${({height}) => height && `height: ${height}`};
  ${({position}) => position && `position: ${position}`};
  ${({top}) => top && `top: ${top}`};
  ${({left}) => left && `left: ${left}`};
  ${({right}) => right && `right: ${right}`};
  ${({bottom}) => bottom && `bottom: ${bottom}`};
  ${({boxShadow}) => boxShadow && `box-shadow: ${boxShadow}`};
`;

Block.propTypes = {
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
  height: string,
  position: string,
  top: string,
  left: string,
  right: string,
  bottom: string,
  boxShadow: string,
};
