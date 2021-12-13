/* eslint-disable react/prop-types */
import React from 'react';
import { FinishBlock } from './index';

const Test = ({
  firstname,
  lastname,
  phone,
  email,
  orderNumber,
  imagesGallery,
}) => (
  <div>
    <FinishBlock
      firstname={firstname}
      lastname={lastname}
      phone={phone}
      email={email}
      orderNumber={orderNumber}
      imagesGallery={imagesGallery}
    />
  </div>
);

export default {
  title: 'Containers/FinishBlock',
  component: Test,
};

const Template = (args) => <Test {...args} />;

export const FinishBlockExample = Template.bind({});

FinishBlockExample.args = {
  firstname: 'Игорь',
  lastname: 'Бойко',
  phone: '+38063 562 23 25',
  email: 'boyko_83@gmail.com',
  orderNumber: '012187',
  imagesGallery: [
    'img-product.png',
    'img-product.png',
    'img-product.png',
    'img-product.png',
    'img-product.png',
  ],
};
