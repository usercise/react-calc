import React from 'react';
import { shallow, render } from 'enzyme';
import Button from './Button';

test('renders without crashing', () => {
  expect(shallow(<Button title="test" callback={() => {}} />).text()).toEqual(
    'test'
  );
});

test('title gets set', () => {
  expect(shallow(<Button title="test" callback={() => {}} />).text()).toEqual(
    'test'
  );

  expect(
    shallow(<Button title="testy" callback={() => {}} />).text()
  ).not.toEqual('test');
});

test('Button to not have changed since test', () => {
  const component = render(<Button title="test" callback={() => {}} />);
  let tree = component.serialize();
  expect(tree).toMatchSnapshot();
});

test('class name to match element', () => {
  expect(
    shallow(<Button title="test" callback={() => {}} />).hasClass('Button')
  ).toBeTruthy();
});

test('modifier gets set', () => {
  expect(
    shallow(
      <Button title="test" callback={() => {}} modifier="test" />
    ).hasClass('Button--test')
  ).toBeTruthy();
});
