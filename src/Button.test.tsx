import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

it('renders without crashing', () => {
  const result = shallow(<Button title="test" callback={() => {}} />).contains(
    'test'
  );
  expect(result).toBeTruthy();
});
