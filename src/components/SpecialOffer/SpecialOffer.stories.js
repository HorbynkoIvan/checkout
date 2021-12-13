/* eslint-disable react/prop-types */
import React from 'react';
import { SpecialOffer } from './SpecialOffer';

const Test = ({ price, priceOld, vendorCode, urlProduct, description }) => (
  <div>
    <SpecialOffer
      price={price}
      priceOld={priceOld}
      vendorCode={vendorCode}
      urlProduct={urlProduct}
      description={description}
    />
  </div>
);

export default {
  title: 'Containers/SpecialOffer',
  component: Test,
};

const Template = (args) => <Test {...args} />;

export const SpecialOfferExample = Template.bind({});

SpecialOfferExample.args = {
  price: 200,
  priceOld: 1000,
  vendorCode: 291345,
  urlProduct: 'https://www.w3schools.com/',
  description:
    'Подгузники Huggies Elite Soft 4 (8-14 кг), 132 шт. (2 уп. по 66 шт.)',
};
