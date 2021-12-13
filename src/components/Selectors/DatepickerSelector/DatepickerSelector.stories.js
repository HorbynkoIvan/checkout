/* eslint-disable react/prop-types */
import React from 'react';
import { DatepickerSelector } from './DatepickerSelector';

const Test = (props) => (
  <div>
    <DatepickerSelector {...props} />
  </div>
);

export default {
  title: 'Selectors/DatepickerSelector',
  component: Test,
};

const Template = (args) => <Test {...args} />;

export const DatepickerSelectorExample = Template.bind({});

DatepickerSelectorExample.args = {};
