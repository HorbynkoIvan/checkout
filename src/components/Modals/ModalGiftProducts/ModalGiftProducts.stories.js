import React, { useState } from 'react';
import { ModalGiftProducts } from './ModalGiftProducts';

export default {
  title: 'Modals/ModalGiftProducts',
  component: ModalGiftProducts,
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

      <ModalGiftProducts
        {...args}
        modalWidth={704}
        opened={opened}
        closeModal={closeModal}
      />
    </>
  );
};

export const BasicModalGiftProducts = Template.bind({});
BasicModalGiftProducts.args = {
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
