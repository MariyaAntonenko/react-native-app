import styled from 'styled-components/native';
import {margin, padding, border} from './mixins/mixins';
import PropTypes, {string, number} from 'prop-types';

export const SafeAreaView = styled.SafeAreaView`
  ${margin};
  ${padding};
  ${border};
  ${({backgroundColor}) =>
    backgroundColor && `background-color: ${backgroundColor}`};
  ${({flex}) => flex && `flex: ${flex}`};
`;

SafeAreaView.propTypes = {
  margin: string,
  padding: string,
  border: string,
  backgroundColor: string,
  flex: number,
};
