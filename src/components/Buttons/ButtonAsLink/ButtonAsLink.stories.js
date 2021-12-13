import React from 'react';
import { ButtonAsLink } from './ButtonAsLink';

export default {
  title: 'Buttons/ButtonAsLink',
  component: <ButtonAsLink />,
};

const Template = (args) => <ButtonAsLink {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Войдите в аккаунт',
};
