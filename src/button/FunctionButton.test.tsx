import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Button from './Button';
import FunctionButton from './FunctionButton';

describe('<FunctionButton />', () => {
  it('renders without crashing', () => {
    expect(
      shallow(
        <FunctionButton call="/" functionButtonUpdateValue={() => {}} />
      ).find(Button)
    ).toHaveLength(1);
  });

  it('Button DOM to not have changed', () => {
    const component = shallow(
      <FunctionButton call="/" functionButtonUpdateValue={() => {}} />
    );
    expect(component.html()).toMatchSnapshot();
  });

  it('modifier gets set', () => {
    const wrapper = shallow(
      <FunctionButton
        call="/"
        functionButtonUpdateValue={() => {}}
        modifier="test"
      />
    );
    expect(wrapper.find(Button).prop('modifier')).toEqual('test');
  });

  it('title gets set', () => {
    const wrapper = shallow(
      <FunctionButton
        call="/"
        functionButtonUpdateValue={() => {}}
        modifier="test"
      />
    );
    expect(wrapper.find(Button).prop('title')).toEqual('/');
  });

  it('simulates click events', () => {
    const onButtonClick = jest.fn();
    const wrapper = mount(
      <FunctionButton call="/" functionButtonUpdateValue={onButtonClick} />
    );
    wrapper.find('button').simulate('click');
    expect(onButtonClick).toHaveBeenCalled();
  });

  it('click events has currect parameter', () => {
    const onButtonClick = jest.fn();
    const wrapper = mount(
      <FunctionButton call="/" functionButtonUpdateValue={onButtonClick} />
    );
    wrapper.find('button').simulate('click');
    expect(onButtonClick).toHaveBeenCalledWith('/', false);
  });
});
