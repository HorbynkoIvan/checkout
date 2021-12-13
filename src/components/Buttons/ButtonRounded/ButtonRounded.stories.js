import React from 'react';
import { action } from '@storybook/addon-actions';
import { ButtonRounded } from './ButtonRounded';
import facebook from '../../../assets/img/social/facebook.svg';
import insta from '../../../assets/img/social/insta.svg';
import google from '../../../assets/img/social/google.svg';

export default {
  title: 'Buttons/ButtonRounded',
  component: ButtonRounded,
  args: {},
};

const Template = (args) => (
  <ButtonRounded {...args} onClick={action('button-click')} />
);

export const ButtonRoundedFace = Template.bind({});

ButtonRoundedFace.args = {
  srcImage: facebook,
};

export const ButtonRoundedInsta = Template.bind({});

ButtonRoundedInsta.args = {
  srcImage: insta,
};

export const ButtonRoundedGoogle = Template.bind({});

ButtonRoundedGoogle.args = {
  srcImage: google,
};
