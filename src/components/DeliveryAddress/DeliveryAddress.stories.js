/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { DeliveryAddress } from './DeliveryAddress';

const Container = styled.div`
  max-width: 328px;
  width: 100%;
`;

const Test = (props) => (
  <Container>
    <DeliveryAddress {...props} />
  </Container>
);

export default {
  title: 'Containers/DeliveryAddress',
  component: Test,
};

const Template = (args) => <Test {...args} />;

export const DeliveryAddressExample = Template.bind({});

DeliveryAddressExample.args = {};
