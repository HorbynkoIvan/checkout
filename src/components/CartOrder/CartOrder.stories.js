import React from 'react';
import { CartOrder } from './CartOrder';

export default {
  title: 'Containers/CartOrder',
  component: CartOrder,
};

const Template = (args) => <CartOrder {...args} />;

export const Guest = Template.bind({});

Guest.args = {
  count: 7,
  cartAmount: 7,
  total: 4396,
  discountBenefit: 228,
  willChargePampiksAmount: 228,
  usePampiksDisabled: true,
  userLoggedIn: false,
  pampiksAmountUAH: 87,
  wasChargedPampiksAmount: 87,
  isCouponSuccessful: false,
  couponName: 'Huggies50',
  showBtnAddCoupon: false,
};

export const GuestCouponSuccess = Template.bind({});

GuestCouponSuccess.args = {
  count: 7,
  cartAmount: 7,
  total: 4396,
  discountBenefit: 228,
  willChargePampiksAmount: 228,
  usePampiksDisabled: true,
  userLoggedIn: false,
  pampiksAmountUAH: 87,
  wasChargedPampiksAmount: 87,
  isCouponSuccessful: true,
  couponName: 'Huggies50',
  showBtnAddCoupon: true,
};

export const Auth = Template.bind({});

Auth.args = {
  count: 7,
  cartAmount: 7,
  total: 4396,
  discountBenefit: 228,
  willChargePampiksAmount: 228,
  usePampiksDisabled: false,
  userLoggedIn: true,
  pampiksAmountUAH: 87,
  pampiksAmount: 112345,
  wasChargedPampiksAmount: 87,
};

export const AuthPampiksSuccess = Template.bind({});

AuthPampiksSuccess.args = {
  count: 7,
  cartAmount: 7,
  total: 4396,
  discountBenefit: 228,
  willChargePampiksAmount: 228,
  usePampiksDisabled: false,
  userLoggedIn: true,
  isPampiksSuccessful: true,
  pampiksAmountUAH: 87,
  pampiksAmount: 112345,
  wasChargedPampiksAmount: 87,
};
