import React from 'react';
import { Image } from './Image';

export default {
  title: 'Basic/Image',
  component: Image,
};

const Template = (args) => <Image {...args} />;

export const ImageEmpty = Template.bind({});

ImageEmpty.args = {};

export const ImageExample = Template.bind({});

ImageExample.args = {
  imageSrc:
    'https://cdn.parfums.ua/public/cache/60/skus/15734773345dc95bd690989.jpg',
  alt: 'test',
};
