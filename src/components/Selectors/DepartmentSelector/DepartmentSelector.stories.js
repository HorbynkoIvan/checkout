/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { DepartmentSelector } from './DepartmentSelector';

const Container = styled.div`
  max-width: 328px;
  width: 100%;
`;

const Test = (props) => (
  <Container>
    <DepartmentSelector {...props} />
  </Container>
);

export default {
  title: 'Selectors/DepartmentSelector',
  component: Test,
};

const Template = (args) => <Test {...args} />;

export const DepartmentSelectorExample = Template.bind({});

DepartmentSelectorExample.args = {};
