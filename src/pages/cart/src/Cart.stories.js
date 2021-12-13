import React from 'react';
import { Cart } from './Cart';

const dataAll = {
  orderId: '6706559',
  products: [
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
  ],
  promotion: {
    textModal:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consectetur dolorem dolores ipsa laborum minima molestiae nihil quis ullam vero.',
  },
  productsWishList: [
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
  ],
  productsBuyAgain: [
    {
      id: '291881',
      options: {
        expiryDate: 'Сроки годности до 05.2022',
      },
      imgUrl:
        'https://cdn.parfums.ua/public/cache/60/skus/15734773345dc95bd690989.jpg',
      urlProduct: '#asdasd',
      description:
        'Многоразовая пеленка Aden + Anais Lucky field Lady Bug, муслин, 120х120 см, белый с красным, 1 шт. (AA-8964G)',
      vendorCode: '291881',
      price: '34 999',
    },
    {
      id: '291881',
      options: {
        expiryDate: 'Сроки годности до 05.2022',
      },
      imgUrl:
        'https://cdn.parfums.ua/public/cache/60/skus/15734773345dc95bd690989.jpg',
      urlProduct: '#asdasd',
      description:
        'Многоразовая пеленка Aden + Anais Lucky field Lady Bug, муслин, 120х120 см, белый с красным, 1 шт. (AA-8964G)',
      vendorCode: '291881',
      price: '34 999',
    },
  ],
  authorized: {
    customerName: '',
    count: 7,
    cartAmount: 7,
    total: 4396,
    discountBenefit: 228,
    willChargePampiksAmount: 228,
    usePampiksDisabled: true,
    userLoggedIn: false,
    pampiksAmountUAH: 87,
    wasChargedPampiksAmount: 87,
    isCouponSuccessful: false,
    couponName: 'Huggies50',
    showBtnAddCoupon: false,
  },
  toogetherCheaper: {
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
  inputPromo: {
    name: 'promocode',
    type: 'text',
    placeholder: 'Хочу применить Промокод',
    errorText: 'Не верный промокод',
    disabled: false,
    error: false,
    onChangeFunc: (value) => {
      console.log(value);
    },
  },
  inputCertificate: {
    name: 'certificate',
    type: 'text',
    placeholder: 'Хочу применить сертификат',
    errorText: 'Не верный сертификат',
    disabled: false,
    error: false,
    onChangeFunc: (value) => {
      console.log(value);
    },
  },
  inputPampiks: {
    name: 'pampiks',
    type: 'text',
    placeholder: 'Хочу воспользоваться пампиками',
    errorText: 'Не верный пампик',
    disabled: true,
    error: false,
    onChangeFunc: (value) => {
      console.log(value);
    },
  },
  tabs: [
    { name: 'cart', title: 'Корзина (7)' },
    { name: 'wishList', title: 'Желания' },
    { name: 'buyAgain', title: 'Купить снова' },
  ],
  specialBlockData: {
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
  },
};

export default {
  title: 'Pages/Cart',
  component: <Cart />,
};

const Template = (args) => <Cart {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  data: dataAll,
};
