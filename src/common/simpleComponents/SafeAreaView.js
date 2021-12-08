import styled from 'styled-components/native';
import {margin, padding} from './mixins/mixins';
import PropTypes, {string, number} from 'prop-types';

export const SafeAreaView = styled.SafeAreaView`
  ${margin};
  ${padding};
  ${({backgroundColor}) =>
    backgroundColor && `background-color: ${backgroundColor}`};
  ${({flex}) => flex && `flex: ${flex}`};
`;

SafeAreaView.propTypes = {
  backgroundColor: string,
  flex: number,
};
