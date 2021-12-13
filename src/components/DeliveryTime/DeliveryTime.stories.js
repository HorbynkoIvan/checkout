/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { DeliveryTime } from './DeliveryTime';

const Container = styled.div`
  max-width: 328px;
  width: 100%;
`;

const Test = (props) => (
  <Container>
    <DeliveryTime {...props} />
  </Container>
);

export default {
  title: 'Containers/DeliveryTime',
  component: Test,
};

const Template = (args) => <Test {...args} />;

export const DeliveryTimeExample = Template.bind({});

DeliveryTimeExample.args = {};
