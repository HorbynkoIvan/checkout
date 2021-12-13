import React from 'react';
import { Tooltip } from './Tooltip';

export default {
  title: 'Basic/Tooltip',
  component: Tooltip,
  argTypes: {
    svgColor: { control: 'text' },
  },
};

const Template = (args) => <Tooltip {...args}>{args.children}</Tooltip>;

export const Basic = Template.bind({});

Basic.args = {
  tooltipText:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, laborum.',
  svgColor: 'red',
};
