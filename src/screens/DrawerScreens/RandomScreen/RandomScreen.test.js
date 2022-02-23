import React from 'react';
import {render} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import {RandomScreen} from './RandomScreen';

test('render RandomScreen component', () => {
  const tree = renderer.create(<RandomScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
