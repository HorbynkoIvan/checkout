import React from 'react';
import { ProductCardListing } from './ProductCardListing';

export default {
  title: 'Basic/ProductCardListing',
  component: <ProductCardListing />,
};

const Template = (args) => <ProductCardListing {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  data: {
    urlProduct: '#',
    imgSrc: 'https://pampik.com/uploads/product/small/20210326/bNpVXipf.png',
    description: 'Подгузники Pampers Premium Care 4 (9-14 кг), 104 шт.',
    label: 'Скидка - 27%',
    selectLabel: 'Кол-во подгузников',
    selectOption: [
      {
        label: '148',
        value: '148 шт.',
      },
      {
        label: '96',
        value: '96 шт.',
      },
    ],
    price: '450',
    priceOld: '500',
    rating: 3,
    ratingTotal: 5,
    reviewsCount: '2',
  },
};
