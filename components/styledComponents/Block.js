import styled from 'styled-components/native';
import {margin, padding, bgColor} from './mixins/mixins';

export const StyledSafeAreaView = styled.SafeAreaView`
  ${margin};
  ${padding};
  background-color: white;
  flex: 1;
`;

export const Block = styled.View`
  ${margin};
  ${padding};
  display: flex;
  flex-direction: column;
`;

export const StyledView = styled.View`
  ${margin};
  ${padding};
  ${bgColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const CartArea = styled.View`
  ${padding};
  border: 0.5px solid gray;
`;
export const CartAreaItems = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-bottom-width: 0.5px;
  border-bottom-style: solid;
  border-bottom-color: gray;
`;
export const FooterContainer = styled.View`
  ${margin};
  ${padding};
  position: relative;
  bottom: 0;
  border-top-width: 0.5px;
  border-top-style: solid;
  border-top-color: gray;
`;
