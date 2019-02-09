import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Button from './Button';

describe('<Button />', () => {
  it('renders without crashing', () => {
    expect(shallow(<Button title="test" callback={() => {}} />).text()).toEqual(
      'test'
    );
  });

  it('title gets set', () => {
    expect(shallow(<Button title="test" callback={() => {}} />).text()).toEqual(
      'test'
    );

    expect(
      shallow(<Button title="testy" callback={() => {}} />).text()
    ).not.toEqual('test');
  });

  it('Button DOM to not have changed', () => {
    const component = shallow(<Button title="test" callback={() => {}} />);
    expect(component.html()).toMatchSnapshot();
  });

  it('class name to match element', () => {
    expect(
      shallow(<Button title="test" callback={() => {}} />).hasClass('Button')
    ).toBeTruthy();
  });

  it('modifier gets set', () => {
    expect(
      shallow(
        <Button title="test" callback={() => {}} modifier="test" />
      ).hasClass('Button--test')
    ).toBeTruthy();
  });

  it('simulates click events', () => {
    const onButtonClick = jest.fn();
    const wrapper = mount(<Button title="test" callback={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick).toHaveBeenCalled();
  });
});
