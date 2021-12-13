/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { DeliveryAddressesList } from './DeliveryAddressesList';

const Container = styled.div`
  max-width: 328px;
  width: 100%;
`;

const Test = (props) => (
  <Container>
    <DeliveryAddressesList {...props} />
  </Container>
);

export default {
  title: 'Containers/DeliveryAddressesList',
  component: Test,
};

const Template = (args) => <Test {...args} />;

export const DeliveryAddressesListBasic = Template.bind({});

DeliveryAddressesListBasic.args = {};
