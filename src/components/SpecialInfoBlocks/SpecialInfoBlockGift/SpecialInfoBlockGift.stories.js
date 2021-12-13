import React from 'react';

import { SpecialInfoBlockGift } from './SpecialInfoBlockGift';

export default {
  title: 'Containers/SpecialInfoBlocks/SpecialInfoBlockGift',
  component: <SpecialInfoBlockGift />,
};

const Template = (args) => <SpecialInfoBlockGift {...args} />;

export const ChooseGift = Template.bind({});

ChooseGift.args = {
  labelOptions: {
    present: true,
    big: true,
  },
  data: {
    maxGifts: 2,
    products: [
      {
        productUrl: '#',
        imgSrc:
          'https://cdn.parfums.ua/public/cache/60/skus/15734773345dc95bd690989.jpg',
        productDescription:
          'Подгузники Pampers Premium Care 2 (4-8 кг), 148 шт.',
        vendorCode: '291881',
      },
      {
        productUrl: '#',
        imgSrc:
          'https://cdn.parfums.ua/public/cache/60/skus/15734773345dc95bd690989.jpg',
        productDescription:
          'Подгузники Pampers Premium Care 2 (4-8 кг), 148 шт.',
        vendorCode: '291881',
      },
      {
        productUrl: '#',
        imgSrc:
          'https://cdn.parfums.ua/public/cache/60/skus/15734773345dc95bd690989.jpg',
        productDescription:
          'Подгузники Pampers Premium Care 2 (4-8 кг), 148 шт.',
        vendorCode: '291881',
      },
    ],
  },
};
