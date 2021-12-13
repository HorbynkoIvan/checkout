import React from 'react';
import { action } from '@storybook/addon-actions';
import { ButtonSocial } from './ButtonSocial';
import facebook from '../../../assets/img/social/facebook.svg';
import insta from '../../../assets/img/social/insta.svg';
import google from '../../../assets/img/social/google.svg';

export default {
  title: 'Buttons/ButtonSocial',
  component: ButtonSocial,
  args: {},
};

const Template = (args) => (
  <ButtonSocial {...args} onClick={action('button-click')} />
);

export const ButtonSocialFace = Template.bind({});

ButtonSocialFace.args = {
  nameSocial: 'Facebook',
  srcImage: facebook,
};

export const ButtonSocialInsta = Template.bind({});

ButtonSocialInsta.args = {
  nameSocial: 'Instagram',
  srcImage: insta,
};

export const ButtonSocialGoogle = Template.bind({});

ButtonSocialGoogle.args = {
  nameSocial: 'Google',
  srcImage: google,
};
