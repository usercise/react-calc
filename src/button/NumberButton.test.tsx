import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Button from './Button';
import NumberButton from './NumberButton';

describe('<NumberButton />', () => {
  it('renders without crashing', () => {
    expect(
      shallow(
        <NumberButton
          number={1}
          updateInput={() => {}}
          isEditing={true}
          displayValue="10"
        />
      ).find(Button)
    ).toHaveLength(1);
  });

  it('Button DOM to not have changed', () => {
    const component = shallow(
      <NumberButton
        number={1}
        updateInput={() => {}}
        isEditing={true}
        displayValue="10"
      />
    );
    expect(component.html()).toMatchSnapshot();
  });

  it('modifier gets set', () => {
    const wrapper = shallow(
      <NumberButton
        number={1}
        updateInput={() => {}}
        isEditing={true}
        displayValue="10"
        modifier="test"
      />
    );
    expect(wrapper.find(Button).prop('modifier')).toEqual('test');
  });

  it('title gets set', () => {
    const wrapper = shallow(
      <NumberButton
        number={1}
        updateInput={() => {}}
        isEditing={true}
        displayValue="10"
        modifier="test"
      />
    );
    expect(wrapper.find(Button).prop('title')).toEqual('1');
  });

  it('simulates click events', () => {
    const onButtonClick = jest.fn();
    const wrapper = mount(
      <NumberButton
        number={1}
        updateInput={onButtonClick}
        isEditing={true}
        displayValue="10"
      />
    );
    wrapper.find('button').simulate('click');
    expect(onButtonClick).toHaveBeenCalled();
  });

  it('click events called with correct value when editing', () => {
    const onButtonClick = jest.fn();
    const wrapper = mount(
      <NumberButton
        number={1}
        updateInput={onButtonClick}
        isEditing={true}
        displayValue="10"
      />
    );
    wrapper.find('button').simulate('click');
    expect(onButtonClick).toHaveBeenCalledWith('101');
  });

  it('click events called with correct value when not editing', () => {
    const onButtonClick = jest.fn();
    const wrapper = mount(
      <NumberButton
        number={1}
        updateInput={onButtonClick}
        isEditing={false}
        displayValue="10"
      />
    );
    wrapper.find('button').simulate('click');
    expect(onButtonClick).toHaveBeenCalledWith('1');
  });

  it('click events called with correct value when display value is zero', () => {
    const onButtonClick = jest.fn();
    const wrapper = mount(
      <NumberButton
        number={1}
        updateInput={onButtonClick}
        isEditing={true}
        displayValue="0"
      />
    );
    wrapper.find('button').simulate('click');
    expect(onButtonClick).toHaveBeenCalledWith('1');
  });
});
