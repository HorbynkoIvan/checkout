import React from 'react';

import Link from './index';

export default {
  title: 'Basic/Link',
  component: Link,
};

const Template = (args) => <Link {...args}>ButtonLink</Link>;

export const Primary = Template.bind({});

Primary.args = {
  url: '#',
};
