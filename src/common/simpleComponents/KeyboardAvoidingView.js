import styled from 'styled-components/native';
import PropTypes, {number, string} from 'prop-types';
import {margin} from './mixins/mixins';

export const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  ${margin};
  ${({flex}) => flex && `flex: ${flex}`};
  ${({height}) => height && `height: ${height}`};
`;

StyledKeyboardAvoidingView.propTypes = {
  flex: number,
  height: string,
};
