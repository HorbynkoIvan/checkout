import React from 'react';
import styled from 'styled-components';
import { SuccessBlock } from './SuccessBlock';

const Container = styled.div`
  width: 350px;
`;

export default {
  title: 'Basic/SuccessBlock',
  component: SuccessBlock,
};

const Template = (args) => (
  <Container>
    <SuccessBlock {...args}>{args.children}</SuccessBlock>
  </Container>
);

export const Basic = Template.bind({});

Basic.args = {
  className: '',
  children: 'test',
};
