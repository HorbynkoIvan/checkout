import React from 'react';

import { SpecialInfoBlockSimilarProducts } from './SpecialInfoBlockSimilarProducts';

export default {
  title: 'Containers/SpecialInfoBlocks/SpecialSimilarProducts',
  component: <SpecialInfoBlockSimilarProducts />,
};

const Template = (args) => <SpecialInfoBlockSimilarProducts {...args} />;

export const ProductsSoldOut = Template.bind({});

ProductsSoldOut.args = {
  children: (
    <>
      <p>
        Похоже кто-то вас опередил. Некоторые товары из вашей корзины
        раскуплены!
      </p>
    </>
  ),
  dropdown: {
    productsData: [
      {
        url: '#',
        imgSrc:
          'https://cdn.parfums.ua/public/cache/60/skus/15734773345dc95bd690989.jpg',
        description:
          'Полотенце Ceba Baby Waffle Line Mist Blue, хлопок, 100х100 см, голубой (8971277)',
        vendorCode: '291881',
        productsDataReplace: [
          {
            productUrl: '#',
            imgSrc:
              'https://cdn.parfums.ua/public/cache/60/skus/15734773345dc95bd690989.jpg',
            productDescription:
              'Подгузники Pampers Premium Care 2 (4-8 кг), 148 шт.',
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
            productDescription:
              'Подгузники Pampers Premium Care 2 (4-8 кг), 148 шт.',
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
            productDescription:
              'Подгузники Pampers Premium Care 2 (4-8 кг), 148 шт.',
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
            productDescription:
              'Подгузники Pampers Premium Care 2 (4-8 кг), 148 шт.',
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
      },
      {
        url: '#',
        imgSrc:
          'https://cdn.parfums.ua/public/cache/60/skus/15734773345dc95bd690989.jpg',
        description:
          'Полотенце Ceba Baby Waffle Line Mist Blue, хлопок, 100х100 см, голубой (8971277)',
        vendorCode: '291881',
        productsDataReplace: [
          {
            productUrl: '#',
            imgSrc:
              'https://cdn.parfums.ua/public/cache/60/skus/15734773345dc95bd690989.jpg',
            productDescription:
              'Подгузники Pampers Premium Care 2 (4-8 кг), 148 шт.',
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
      },
      {
        url: '#',
        imgSrc:
          'https://cdn.parfums.ua/public/cache/60/skus/15734773345dc95bd690989.jpg',
        description:
          'Полотенце Ceba Baby Waffle Line Mist Blue, хлопок, 100х100 см, голубой (8971277)',
        vendorCode: '291881',
        productsDataReplace: [],
      },
    ],
  },
  labelOptions: {
    warning: true,
    big: true,
  },
};
