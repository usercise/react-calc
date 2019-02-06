import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

it('renders without crashing', () => {
  const result = shallow(<Button title="test" callback={() => {}} />).contains(
    'test'
  );
  expect(result).toBeTruthy();
});

it('title gets set', () => {
  const truthy = shallow(<Button title="test" callback={() => {}} />).contains(
    'test'
  );
  const falsy = shallow(<Button title="testy" callback={() => {}} />).contains(
    'test'
  );
  expect(truthy).toBeTruthy();
  expect(falsy).toBeFalsy();
});
