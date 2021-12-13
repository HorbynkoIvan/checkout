import React from 'react';
import {
  TitlePage,
  TitleBlock,
  TitleSub,
  TitleInner,
  TitleLabel,
} from './Title';

const Test = () => (
  <>
    <TitlePage>TitlePage (21px)</TitlePage>
    <TitleBlock>TitleBlock (18px)</TitleBlock>
    <TitleSub>TitleSub (16px)</TitleSub>
    <TitleInner>TitleInner (14px)</TitleInner>
    <TitleLabel>TitleInner (12px)</TitleLabel>
  </>
);

export default {
  title: 'Basic',
  component: Test,
};

const Template = () => <Test />;

export const Titles = Template.bind({});
