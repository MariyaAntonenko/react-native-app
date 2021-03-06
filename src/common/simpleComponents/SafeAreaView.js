import styled from 'styled-components/native';
import {marginMixins, paddingMixins, borderMixins} from './mixins/mixins';
import PropTypes, {string, number} from 'prop-types';

export const SafeAreaView = styled.SafeAreaView`
  ${marginMixins};
  ${paddingMixins};
  ${borderMixins};
  ${({backgroundColor}) =>
    backgroundColor && `background-color: ${backgroundColor}`};
  ${({flex}) => flex && `flex: ${flex}`};
`;

SafeAreaView.propTypes = {
  backgroundColor: string,
  flex: number,
};
