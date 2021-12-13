import React from 'react';
import { any } from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  ProductCardListingContentSC,
  ProductCardListingHeaderSC,
  ProductCardListingItemSC,
  ProductCardListingSC,
} from './styled';
// import { RatingStar } from '../RatingStar/RatingStar';
// import { Link } from '../Link/Link';
// import { PriceBlock } from '../PriceBlock/PriceBlock';
import { Button } from '../Buttons/Button/Button';
// import { Pagination } from '../Pagination/Pagination';
// import { ProductCountSelector } from '../Selectors/ProductCountSelector/ProductCountSelector';

export const ProductCardListing = ({ data }) => {
  const { t } = useTranslation();

  const items = data.map((list, k) =>
    list.products.map((item, i) => (
      <ProductCardListingItemSC key={(i + 1) * (k + 1)}>
        <ProductCardListingHeaderSC>
          {/* <a href={item.urlProduct}> */}
          {/*  <img src={item.imgSrc} alt="img" /> */}
          {/*  <span>{item.label}</span> */}
          {/* </a> */}
        </ProductCardListingHeaderSC>

        <ProductCardListingContentSC>
          {/* <a href={item.urlProduct}>{item.description}</a> */}
          <a href="/">{item.name}</a>

          <section>
            {/* <RatingStar total={item.ratingTotal} rating={item.rating} /> */}

            {/* <Link url={item.urlProduct}> */}
            {/*  {item.reviewsCount} {t('отзыва')} */}
            {/* </Link> */}
          </section>

          {/* {i !== 1 && ( */}
          {/*  <div> */}
          {/*    <p>{item.selectLabel}</p> */}

          {/*    <ProductCountSelector data={item.selectOption} /> */}
          {/*  </div> */}
          {/* )} */}

          <section>
            {/* <PriceBlock */}
            {/*  price={item.price} */}
            {/*  priceOld={item.priceOld} */}
            {/*  directionColumn */}
            {/* /> */}

            <Button onClick={() => console.log('click')} sm>
              {t('Купить')}
            </Button>
          </section>
        </ProductCardListingContentSC>
      </ProductCardListingItemSC>
    ))
  );
  return (
    <ProductCardListingSC>
      {items}
      {/* <Pagination /> */}
    </ProductCardListingSC>
  );
};

ProductCardListing.propTypes = {
  data: any,
};
