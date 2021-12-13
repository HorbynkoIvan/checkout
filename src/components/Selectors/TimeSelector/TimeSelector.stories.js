/* eslint-disable react/prop-types */
import React from 'react';
import { TimeSelector } from './TimeSelector';

const Test = (props) => (
  <div>
    <TimeSelector {...props} />
  </div>
);

export default {
  title: 'Selectors/TimeSelector',
  component: Test,
};

const Template = (args) => <Test {...args} />;

export const TimeSelectorExample = Template.bind({});

TimeSelectorExample.args = {};
