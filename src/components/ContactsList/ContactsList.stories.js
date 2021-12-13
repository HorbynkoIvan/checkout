/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { ContactsList } from './ContactsList';

const Container = styled.div`
  max-width: 328px;
  width: 100%;
`;

const Test = (props) => (
  <Container>
    <ContactsList {...props} />
  </Container>
);

export default {
  title: 'Containers/ContactsList',
  component: Test,
};

const Template = (args) => <Test {...args} />;

export const AddressesListBasic = Template.bind({});

AddressesListBasic.args = {};
