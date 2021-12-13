/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { DeliverySelector } from './DeliverySelector';

const Container = styled.div`
  max-width: 328px;
  width: 100%;
`;

const Test = (props) => (
  <Container>
    <DeliverySelector {...props} />
  </Container>
);

export default {
  title: 'Selectors/DeliverySelector',
  component: Test,
};

const Template = (args) => <Test {...args} />;

export const DeliverySelectorExample = Template.bind({});

DeliverySelectorExample.args = {
  notification: 'Доставим в течение 24 часов. Стоимость - бесплатно',
};
