/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { BlockRadio } from './BlockRadio';

const Container = styled.div`
  max-width: 328px;
  width: 100%;
`;

const Test = (props) => (
  <Container>
    <BlockRadio {...props} />
  </Container>
);

export default {
  title: 'Basic/BlockRadio',
  component: Test,
};

const Template = (args) => <Test {...args} />;

export const BlockRadioBasic = Template.bind({});

BlockRadioBasic.args = {
  title: 'Григоренко Анна Олеговна',
  isActive: false,
};

export const BlockRadioActive = Template.bind({});

BlockRadioActive.args = {
  title: 'Григоренко Анна Олеговна',
  isActive: true,
};
