import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../button/Button';
import NumberButton from '../button/NumberButton';
import FunctionButton from '../button/FunctionButton';

storiesOf('Button', module)
  .add('with text', () => <Button callback={action('clicked')} title="Text" />)
  .add('with text and value', () => (
    <Button callback={action('clicked')} title="Text" buttonValue={2} />
  ));

storiesOf('Number Button', module)
  .add('with number', () => (
    <NumberButton
      number={2}
      updateInput={action('clicked')}
      displayValue="12"
      isEditing={false}
    />
  ))
  .add('with number and modifier class', () => (
    <NumberButton
      number={2}
      updateInput={action('clicked')}
      displayValue="12"
      isEditing={false}
      modifier="plus"
    />
  ));

storiesOf('Function Button', module)
  .add('with sign', () => (
    <FunctionButton
      call="+"
      functionButtonUpdateValue={action('clicked')}
      displayValue="+"
    />
  ))
  .add('with sign and modifier class', () => (
    <FunctionButton
      call="+"
      functionButtonUpdateValue={action('clicked')}
      displayValue="+"
      modifier="plus"
    />
  ));
