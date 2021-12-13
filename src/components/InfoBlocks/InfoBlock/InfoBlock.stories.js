import React from 'react';
import styled from 'styled-components';
import { InfoBlock } from './InfoBlock';

const Container = styled.div`
  width: 350px;
`;

export default {
  title: 'Basic/InfoBlock',
  component: InfoBlock,
};

const Template = (args) => (
  <Container>
    <InfoBlock {...args}>{args.children}</InfoBlock>
  </Container>
);

export const Basic = Template.bind({});

Basic.args = {
  className: '',
  children: 'test',
};
