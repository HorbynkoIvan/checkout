import React from 'react';
import styled from 'styled-components';
import { UsePampiks } from './UsePampiks';

const Container = styled.div`
  width: 350px;
`;

export default {
  title: 'Basic/UsePampiks',
  component: UsePampiks,
};

const Template = (args) => (
  <Container>
    <UsePampiks {...args} />
  </Container>
);

export const Basic = Template.bind({});

Basic.args = {
  pampiksAmountUAH: 112,
  pampiksAmount: 112345,
  wasChargedPampiksAmount: 112,
};

export const Successful = Template.bind({});

Successful.args = {
  pampiksAmountUAH: 112,
  pampiksAmount: 112345,
  wasChargedPampiksAmount: 112,
  isPampiksSuccessful: true,
};
