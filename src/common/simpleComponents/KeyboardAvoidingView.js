import styled from 'styled-components/native';
import PropTypes, {number, string} from 'prop-types';
import {marginMixins} from './mixins/mixins';

export const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  ${marginMixins};
  ${({paddingHorizontal}) =>
          paddingHorizontal && `paddingHorizontal: ${paddingHorizontal}`};
  ${({paddingVertical}) =>
          paddingVertical && `paddingVertical: ${paddingVertical}`};
  ${({marginHorizontal}) =>
          marginHorizontal && `marginHorizontal: ${marginHorizontal}`};
  ${({marginVertical}) =>
          marginVertical && `marginVertical: ${marginVertical}`};
  ${({flex}) => flex && `flex: ${flex}`};
  ${({height}) => height && `height: ${height}`};
`;

StyledKeyboardAvoidingView.propTypes = {
  marginHorizontal: string,
  marginVertical: string,
  paddingHorizontal: string,
  paddingVertical: string,
  margin: string,
  flex: number,
  height: string,
};
