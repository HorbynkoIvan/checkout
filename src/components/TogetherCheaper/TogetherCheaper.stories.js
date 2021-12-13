import React from 'react';
import { TogetherCheaper } from './TogetherCheaper';

export default {
  title: 'Containers/TogetherCheaper',
  component: <TogetherCheaper />,
};

const Template = (args) => <TogetherCheaper {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  data: {
    countSets: 2,
    setsPrice: '2071',
    setsPriceOld: '2339',
    countPampiks: '2071',
    products: [
      {
        productUrl: '#',
        imgSrc:
          'https://cdn.parfums.ua/public/cache/60/skus/15734773345dc95bd690989.jpg',
        description: 'Ручной молокоотсос Philips Avent Natural (SCF330/20)',
        vendorCode: '291881',
        price: '1231',
        priceOld: '1499',
      },
      {
        productUrl: '#',
        imgSrc:
          'https://cdn.parfums.ua/public/cache/60/skus/15734773345dc95bd690989.jpg',
        description:
          'Многоразовая пеленка Aden + Anais Lucky field Lady Bug муслин, 120х120 см, белый с красным, 1 шт. (AA-8964G)',
        vendorCode: '291881',
        price: '840',
      },
    ],
  },
};
