/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { StreetSelector } from './StreetSelector';

const Container = styled.div`
  max-width: 328px;
  width: 100%;
`;

const Test = (props) => (
  <Container>
    <StreetSelector {...props} />
  </Container>
);

export default {
  title: 'Selectors/StreetSelector',
  component: Test,
};

const Template = (args) => <Test {...args} />;

export const StreetSelectorExample = Template.bind({});

StreetSelectorExample.args = {};
