import React from 'react';
import { any } from 'prop-types';
import { ProductCardWishListSC } from './styled';
import { ProductCardListing } from '../ProductCardListing/ProductCardListing';

export const ProductCardWishList = ({ data }) => {
  const items = data.map((item, i) => (
    <ProductCardListing data={item} key={i} />
  ));
  return <ProductCardWishListSC>{items}</ProductCardWishListSC>;
};

ProductCardWishList.propTypes = {
  data: any,
};
