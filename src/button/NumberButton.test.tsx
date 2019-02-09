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
    const component = render(
      <NumberButton
        number={1}
        updateInput={() => {}}
        isEditing={true}
        displayValue="10"
      />
    );
    let tree = component.serialize();
    expect(tree).toMatchSnapshot();
  });

  it('modifier gets set', () => {
    expect(
      mount(
        <NumberButton
          number={1}
          updateInput={() => {}}
          isEditing={true}
          displayValue="10"
          modifier="test"
        />
      )
        .find('button')
        .hasClass('Button--test')
    ).toBeTruthy();
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

  it('click events return correct value when editing', () => {
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

  it('click events return correct value when not editing', () => {
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

  it('click events return correct value when called with zero', () => {
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
