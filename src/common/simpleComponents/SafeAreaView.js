import styled from 'styled-components/native';
import {marginMixins, paddingMixins, borderMixins} from './mixins/mixins';
import PropTypes, {string, number} from 'prop-types';

export const SafeAreaView = styled.SafeAreaView`
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
  ${({flex}) => flex && `flex: ${flex}`};
`;

SafeAreaView.propTypes = {
  marginHorizontal: string,
  marginVertical: string,
  paddingHorizontal: string,
  paddingVertical: string,
  margin: string,
  padding: string,
  border: string,
  backgroundColor: string,
  flex: number,
};
