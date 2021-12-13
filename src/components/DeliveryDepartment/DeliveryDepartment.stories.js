/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { DeliveryDepartment } from './DeliveryDepartment';

const Container = styled.div`
  max-width: 328px;
  width: 100%;
`;

const Test = (props) => (
  <Container>
    <DeliveryDepartment {...props} />
  </Container>
);

export default {
  title: 'Containers/DeliveryDepartment',
  component: Test,
};

const Template = (args) => <Test {...args} />;

export const DeliveryDepartmentExample = Template.bind({});

DeliveryDepartmentExample.args = {};
