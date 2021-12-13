import React, { useState } from 'react';
import { ModalSimilarProducts } from './ModalSimilarProducts';

export default {
  title: 'Modals/ModalSimilarProducts',
  component: ModalSimilarProducts,
};

const Template = (args) => {
  const [opened, setOpen] = useState(true);
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        test
      </button>
      <ModalSimilarProducts
        {...args}
        modalWidth={704}
        opened={opened}
        closeModal={closeModal}
      />
    </>
  );
};

export const BasicModalSimilarProducts = Template.bind({});
BasicModalSimilarProducts.args = {
  data: [
    {
      productUrl: '#',
      imgSrc:
        'https://cdn.parfums.ua/public/cache/60/skus/15734773345dc95bd690989.jpg',
      productDescription: 'Подгузники Pampers Premium Care 2 (4-8 кг), 148 шт.',
      vendorCode: '291881',
      rating: 4,
      reviewsCount: 345,
      reviewsUrl: '#',
      productVariants: [
        {
          label: '148',
          value: '148 шт.',
        },
        {
          label: '96',
          value: '96 шт.',
        },
      ],
      price: '569',
      priceOld: '828',
      priceForOne: '3,84',
    },
    {
      productUrl: '#',
      imgSrc:
        'https://cdn.parfums.ua/public/cache/60/skus/15734773345dc95bd690989.jpg',
      productDescription: 'Подгузники Pampers Premium Care 2 (4-8 кг), 148 шт.',
      vendorCode: '291881',
      rating: 4,
      reviewsCount: 345,
      reviewsUrl: '#',
      price: '569',
      priceOld: '828',
      priceForOne: '3,84',
    },
    {
      productUrl: '#',
      imgSrc:
        'https://cdn.parfums.ua/public/cache/60/skus/15734773345dc95bd690989.jpg',
      productDescription: 'Подгузники Pampers Premium Care 2 (4-8 кг), 148 шт.',
      vendorCode: '291881',
      rating: 4,
      reviewsCount: 345,
      reviewsUrl: '#',
      productVariants: [
        {
          label: '148',
          value: '148 шт.',
        },
        {
          label: '96',
          value: '96 шт.',
        },
      ],
      price: '569',
      priceOld: '828',
      priceForOne: '3,84',
    },
    {
      productUrl: '#',
      imgSrc:
        'https://cdn.parfums.ua/public/cache/60/skus/15734773345dc95bd690989.jpg',
      productDescription: 'Подгузники Pampers Premium Care 2 (4-8 кг), 148 шт.',
      vendorCode: '291881',
      rating: 4,
      reviewsCount: 345,
      reviewsUrl: '#',
      productVariants: [
        {
          label: '148',
          value: '148 шт.',
        },
        {
          label: '96',
          value: '96 шт.',
        },
      ],
      price: '569',
      priceOld: '828',
      priceForOne: '3,84',
    },
  ],
};
