import React from 'react';
import { SpecialInfoBlockBase } from './SpecialInfoBlockBase';

export default {
  title: 'Containers/SpecialInfoBlocks/BaseWrapper',
  component: <SpecialInfoBlockBase />,
};

const Template = (args) => <SpecialInfoBlockBase {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: (
    <>
      <p>BaseWrapper</p>
    </>
  ),
  labelOptions: {
    present: true,
    big: true,
  },
};
