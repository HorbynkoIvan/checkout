import React from 'react';
import { ThankYouPage } from './ThankYouPage';
import gallery1 from '../../assets/img/galleryMock/gallery1.png';
import gallery2 from '../../assets/img/galleryMock/gallery2.png';
import gallery3 from '../../assets/img/galleryMock/gallery3.png';
import gallery4 from '../../assets/img/galleryMock/gallery4.png';

const Test = (props) => (
  <div>
    <ThankYouPage {...props} />
  </div>
);

export default {
  title: 'Pages/ThankYouPage',
  component: Test,
};

const Template = (args) => <Test {...args} />;

export const ThankYouPageGuest = Template.bind({});

ThankYouPageGuest.args = {
  firstname: 'Игорь',
  lastname: 'Бойко',
  phone: '+38063 562 23 25',
  email: 'boyko_83@gmail.com',
  orderNumber: '012187',
  imagesGallery: [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    'img-product.png',
    'img-product.png',
    'img-product.png',
    'img-product.png',
    'img-product.png',
  ],
  price: 200,
  priceOld: 1000,
  vendorCode: 291345,
  urlProduct: 'https://www.w3schools.com/',
  description:
    'Подгузники Huggies Elite Soft 4 (8-14 кг), 132 шт. (2 уп. по 66 шт.)',
};
