/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { UserData } from './UserData';
import { CheckoutContext } from '../../context';

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
      <UserData {...props} />
    </Container>
  </CheckoutContext.Provider>
);

export default {
  title: 'Containers/UserData',
  component: Test,
};

const Template = (args) => <Test {...args} />;

export const GuestPhoneNotRegistered = Template.bind({});

GuestPhoneNotRegistered.args = {
  userLoggedIn: false,
  isPhoneRegistered: false,
};

export const GuestPhoneRegistered = Template.bind({});

GuestPhoneRegistered.args = {
  userLoggedIn: false,
  isPhoneRegistered: true,
};
