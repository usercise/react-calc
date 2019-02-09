import React from 'react';
import { mount, shallow, render } from 'enzyme';
import NumberButton from './button/NumberButton';
import FunctionButton from './button/FunctionButton';
import Calculator from './Calculator';

describe('<Calculator />', () => {
  it('renders without crashing', () => {
    const component = shallow(<Calculator isLargeSize={false} />);
    expect(component.html()).toMatchSnapshot();
  });

  it('large class not to be set when isLargeSize is false', () => {
    const component = shallow(<Calculator isLargeSize={false} />);
    expect(component.hasClass('Calculator--large')).toBeFalsy();
  });

  it('large class to be set when isLargeSize is true', () => {
    const component = shallow(<Calculator isLargeSize={true} />);
    expect(component.hasClass('Calculator--large')).toBeTruthy();
  });

  it('display to show zero', () => {
    const component = shallow(<Calculator isLargeSize={false} />);
    expect(component.find('.Calculator-result').text()).toBe('0');
  });

  it('display to show seven after clicking first number button', () => {
    const component = mount(<Calculator isLargeSize={false} />);
    const numberSeven = component.find(NumberButton).first();
    numberSeven.simulate('click');
    expect(component.state('entryValue')).toBe('7');
    expect(component.find('.Calculator-result').text()).toBe('7');
  });

  it('display to show 1 after clicking 1 + 1', () => {
    const component = mount(<Calculator isLargeSize={false} />);
    const numberOne = component.find(NumberButton).at(6);
    const functionPlus = component.find(FunctionButton).at(5);
    numberOne.simulate('click');
    expect(component.state('entryValue')).toBe('1');
    functionPlus.simulate('click');
    expect(component.state('stateValue')).toBe(1);
    numberOne.simulate('click');
    expect(component.state('entryValue')).toBe('1');

    expect(component.find('.Calculator-result').text()).toBe('1');
  });

  it('display to show 2 after clicking 1 + 1 +', () => {
    const component = mount(<Calculator isLargeSize={false} />);
    const numberOne = component.find(NumberButton).at(6);
    const functionPlus = component.find(FunctionButton).at(5);
    numberOne.simulate('click');
    expect(component.state('entryValue')).toBe('1');
    functionPlus.simulate('click');
    expect(component.state('stateValue')).toBe(1);
    numberOne.simulate('click');
    expect(component.state('entryValue')).toBe('1');
    functionPlus.simulate('click');
    expect(component.state('stateValue')).toBe(2);

    expect(component.find('.Calculator-result').text()).toBe('2');
  });

  it('display to show 2 after clicking 1 + 1 =', () => {
    const component = mount(<Calculator isLargeSize={false} />);
    const numberOne = component.find(NumberButton).at(6);
    const functionPlus = component.find(FunctionButton).at(5);
    const functionEqual = component.find(FunctionButton).last();
    numberOne.simulate('click');
    expect(component.state('entryValue')).toBe('1');
    functionPlus.simulate('click');
    expect(component.state('stateValue')).toBe(1);
    numberOne.simulate('click');
    expect(component.state('entryValue')).toBe('1');
    functionEqual.simulate('click');
    expect(component.state('stateValue')).toBe(2);

    expect(component.find('.Calculator-result').text()).toBe('2');
  });
});
