import React from 'react';
import { ImagesGallery } from './index';

export default {
  title: 'Basic/ImagesGallery',
  component: <ImagesGallery />,
};

const Template = (args) => <ImagesGallery {...args} />;

export const OneItem = Template.bind({});

OneItem.args = {
  data: ['img-product.png'],
};

export const SevenItems = Template.bind({});

SevenItems.args = {
  data: [
    'img-product.png',
    'img-product.png',
    'img-product.png',
    'img-product.png',
    'img-product.png',
    'img-product.png',
    'img-product.png',
  ],
};
