import React from 'react';
import { CheckoutTotalBlock } from './CheckoutTotalBlock';

export default {
  title: 'Basic/CheckoutTotalBlock',
  component: CheckoutTotalBlock,
};

const Template = (args) => <CheckoutTotalBlock {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  cartAmount: 4424,
  total: 4396,
  deliveryPrice: 228,
};

export const WithoutDeliveryPrice = Template.bind({});

WithoutDeliveryPrice.args = {
  cartAmount: 4424,
  total: 4424,
  deliveryPrice: null,
};
