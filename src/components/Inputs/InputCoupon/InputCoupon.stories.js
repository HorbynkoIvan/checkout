import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { InputCoupon } from './InputCoupon';

const Container = styled.div`
  width: 300px;
`;

export default {
  title: 'Inputs/InputCoupon',
  component: InputCoupon,
  argTypes: { onChange: { action: 'onChangeHandler' } },
};

const Template = (args) => (
  <Container>
    <InputCoupon {...args} onChangeHandler={action('input-change')} />
  </Container>
);

export const InnerCoupon = Template.bind({});

InnerCoupon.args = {
  id: 'coupon',
  label: 'Промокод/Сертификат',
  type: 'text',
};
