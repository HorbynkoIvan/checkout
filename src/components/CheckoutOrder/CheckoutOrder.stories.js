import React from 'react';
import { CheckoutOrder } from './CheckoutOrder';

export default {
  title: 'Containers/CheckoutOrder',
  component: CheckoutOrder,
};

const Template = (args) => <CheckoutOrder {...args} />;

export const Guest = Template.bind({});

Guest.args = {
  userLoggedIn: false,
  count: 7,
  cartAmount: 7,
  total: 4396,
  discountBenefit: 228,
  imagesGallery: [
    'img-product.png',
    'img-product.png',
    'img-product.png',
    'img-product.png',
    'img-product.png',
  ],
};

export const Auth = Template.bind({});

Auth.args = {
  userLoggedIn: true,
  count: 7,
  cartAmount: 7,
  total: 4396,
  discountBenefit: 228,
  imagesGallery: [
    'img-product.png',
    'img-product.png',
    'img-product.png',
    'img-product.png',
    'img-product.png',
  ],
};
