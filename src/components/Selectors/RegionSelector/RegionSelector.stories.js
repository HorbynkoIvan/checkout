/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { RegionSelector } from './RegionSelector';
import { CheckoutContext } from '../../../context';

const Container = styled.div`
  max-width: 328px;
  width: 100%;
`;
const formData = {
  phone: '',
  lastname: '',
  firstname: '',
  middlename: '',
  email: '',

  region: '',
  deliveryMethod: '',
  street: '',
  house: '',
  flat: '',

  startDate: '',
  timeRange: '',

  department: '',
};
const Test = (props) => (
  <CheckoutContext.Provider value={{ formData }}>
    <Container>
      <RegionSelector {...props} />
    </Container>
  </CheckoutContext.Provider>
);

export default {
  title: 'Selectors/RegionSelector',
  component: Test,
};

const Template = (args) => <Test {...args} />;

export const RegionSelectorExample = Template.bind({});

RegionSelectorExample.args = {};
