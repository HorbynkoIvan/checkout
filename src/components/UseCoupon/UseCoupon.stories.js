import React from 'react';
import styled from 'styled-components';
import { UseCoupon } from './UseCoupon';

const Container = styled.div`
  width: 350px;
`;

export default {
  title: 'Basic/UseCoupon',
  component: UseCoupon,
};

const Template = (args) => (
  <Container>
    <UseCoupon {...args} />
  </Container>
);

export const Coupon = Template.bind({});

Coupon.args = {
  isCouponSuccessful: false,
  couponName: 'Huggies50',
  showBtnAddCoupon: false,
};

export const CouponSuccess = Template.bind({});

CouponSuccess.args = {
  isCouponSuccessful: true,
  couponName: 'Huggies50',
  showBtnAddCoupon: true,
};
