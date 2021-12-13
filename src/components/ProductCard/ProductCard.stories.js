import React from 'react';
import ProductCard from './index.js';

export default {
  title: 'Containers/ProductCard',
  component: ProductCard,
};

const Template = (args) => <ProductCard {...args} />;

export const Basic = Template.bind();

Basic.args = {
  data: [
    {
      id: '291881',
      options: {
        oversizedProduct: {
          type: 'oversized',
          text: 'Крупногабаритный товар',
          tooltipText:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature' +
            ' from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,' +
            ' looked up one of',
        },
        info: {
          type: 'priceDown',
          text: 'Цена снизилась',
        },
        expiryDate: 'Сроки годности до 05.2022',
      },
      imgUrl:
        'https://cdn.parfums.ua/public/cache/60/skus/15734773345dc95bd690989.jpg',
      urlProduct: '#asdasd',
      description:
        'Многоразовая пеленка Aden + Anais Lucky field Lady Bug, муслин, 120х120 см, белый с красным, 1 шт. (AA-8964G)',
      vendorCode: '291881',
      price: '34 999',
      priceOld: '35 179',
      pampiksCount: '49 990',
      gift: [
        {
          id: '291345',
          imgUrl:
            'https://cdn.parfums.ua/public/cache/60/skus/15734773345dc95bd690989.jpg',
          urlProduct: '#',
          description:
            'Полотенце Ceba Baby Waffle Line Mist Blue, хлопок, 100х100 см, голубой (8971277)',
          vendorCode: '291345',
          price: '0,01',
        },
      ],
    },
    {
      id: '291881',
      options: {
        info: {
          type: 'warning',
          text: 'Добавь еще 2 и получи 1 в подарок',
        },
        expiryDate: 'Сроки годности до 05.2022',
      },
      imgUrl:
        'https://cdn.parfums.ua/public/cache/60/skus/15734773345dc95bd690989.jpg',
      urlProduct: '#asdasd',
      description:
        'Многоразовая пеленка Aden + Anais Lucky field Lady Bug, муслин, 120х120 см, белый с красным, 1 шт. (AA-8964G)',
      vendorCode: '291881',
      price: '34 999',
      priceOld: '35 179',
      pampiksCount: '49 990',
      gift: [
        {
          id: '291345',
          imgUrl:
            'https://cdn.parfums.ua/public/cache/60/skus/15734773345dc95bd690989.jpg',
          urlProduct: '#',
          description:
            'Полотенце Ceba Baby Waffle Line Mist Blue, хлопок, 100х100 см, голубой (8971277)',
          vendorCode: '291345',
          price: '0,01',
        },
        {
          id: '291345',
          imgUrl:
            'https://cdn.parfums.ua/public/cache/60/skus/15734773345dc95bd690989.jpg',
          urlProduct: '#',
          description:
            'Полотенце Ceba Baby Waffle Line Mist Blue, хлопок, 100х100 см, голубой (8971277)',
          vendorCode: '291345',
          price: '0,01',
        },
      ],
    },
  ],
};
