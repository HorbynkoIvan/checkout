import React from 'react';
import { CheckoutPage } from './CheckoutPage';
import gallery1 from '../../../assets/img/galleryMock/gallery1.png';
import gallery2 from '../../../assets/img/galleryMock/gallery2.png';
import gallery3 from '../../../assets/img/galleryMock/gallery3.png';
import gallery4 from '../../../assets/img/galleryMock/gallery4.png';

const Test = (props) => (
  <div>
    <CheckoutPage {...props} />
  </div>
);

export default {
  title: 'Pages/CheckoutPage',
  component: Test,
};

const Template = (args) => <Test {...args} />;

export const CheckoutPageGuest = Template.bind({});

CheckoutPageGuest.args = {
  userLoggedIn: false,
  count: 7,
  cartAmount: 7,
  total: 4396,
  discountBenefit: 228,
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
  order: 6706559,
};

export const CheckoutPageAuth = Template.bind({});

CheckoutPageAuth.args = {
  userLoggedIn: true,
  count: 7,
  cartAmount: 7,
  total: 4396,
  discountBenefit: 228,
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
  order: 6706559,
};
