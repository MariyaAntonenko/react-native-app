import styled from 'styled-components/native';
import {margin, padding} from './mixins/mixins';
import PropTypes, {string, number} from 'prop-types';

export const StyledSafeAreaView = styled.SafeAreaView`
  ${margin};
  ${padding};
  ${({backgroundColor}) =>
    backgroundColor && `background-color: ${backgroundColor}`};
  ${({flex}) => flex && `flex: ${flex}`};
`;
export const Block = styled.View`
  ${margin};
  ${padding};
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
  ${({border}) => border && `border: ${border}`};
  ${({borderRadius}) => borderRadius && `border-radius: ${borderRadius}`};
  ${({borderBottomWidth}) =>
    borderBottomWidth && `border-bottom-width: ${borderBottomWidth}`};
  ${({borderBottomStyle}) =>
    borderBottomStyle && `border-bottom-style: ${borderBottomStyle}`};
  ${({borderBottomColor}) =>
    borderBottomColor && `border-bottom-color: ${borderBottomColor}`};
  ${({borderTopWidth}) =>
    borderTopWidth && `border-top-width: ${borderTopWidth}`};
  ${({borderTopStyle}) =>
    borderTopStyle && `border-top-style: ${borderTopStyle}`};
  ${({borderTopColor}) =>
    borderTopColor && `border-top-color: ${borderTopColor}`};
`;

Block.propTypes = {
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
  border: string,
  borderRadius: string,
  borderBottomWidth: string,
  borderBottomStyle: string,
  borderBottomColor: string,
  borderTopWidth: string,
  borderTopStyle: string,
  borderTopColor: string,
};
