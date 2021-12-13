/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { DeliveryMethod } from './DeliveryMethod';

const Container = styled.div`
  max-width: 328px;
  width: 100%;
`;

const Test = (props) => (
  <Container>
    <DeliveryMethod {...props} />
  </Container>
);

export default {
  title: 'Containers/DeliveryMethod',
  component: Test,
};

const Template = (args) => <Test {...args} />;

export const Courier = Template.bind({});

Courier.args = {
  deliveryMethodType: null,
};

export const Department = Template.bind({});

Department.args = {
  deliveryMethodType: 'department',
};
