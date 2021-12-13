import React, { useContext } from 'react';
import { arrayOf, bool, func, number, object } from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  ScModalSimilarProductsItem,
  ScModalSimilarProductsItemDescription,
  ScModalSimilarProductsRatingBlock,
  ScModalSimilarProductsRatingBlockTablet,
  ScModalSimilarProductsTotalBlock,
} from './styled';

import { RatingStar } from '../../RatingStar/RatingStar';
import { ProductCountSelector } from '../../Selectors/ProductCountSelector/ProductCountSelector';
import { Button } from '../../Buttons/Button/Button';
import { Link } from '../../Link/Link';
import { PriceBlock } from '../../PriceBlock/PriceBlock';
import { ModalBase } from '../ModalBase/ModalBase';
import { desktop, mobile, tablet } from '../../theme/theme';
import { ServiceCart } from '../../../services/ServiceCart';
import { CartContext } from '../../../context';

export const ModalSimilarProducts = ({
  closeModal,
  opened,
  modalWidth,
  data,
}) => {
  const cartContext = useContext(CartContext);
  const { t } = useTranslation();
  const buyButtonHandler = (item) => {
    (async () => {
      try {
        const res = await ServiceCart.updateProductInCart(item.productId, 1);
        closeModal();
        cartContext.addDataCart(res);
      } catch (e) {
        console.log(e);
      }
    })();
  };
  const items = data.map((item, i) => (
    <ScModalSimilarProductsItem key={i}>
      <section>
        <a href={item.url}>
          <img src={item.image} alt={`product-${i}`} />
        </a>

        <ScModalSimilarProductsItemDescription>
          <a href={item.url}>{item.name}</a>

          <a href={item.url}>Артикул - {item.productId}</a>

          {desktop && (
            <ScModalSimilarProductsRatingBlock>
              <RatingStar rating={item.reviewsAverageRating} />
              <Link url={item.url}>{`${item.reviewsCount} отзывов`}</Link>
            </ScModalSimilarProductsRatingBlock>
          )}

          {desktop && item.productVariants && (
            <ProductCountSelector data={item.productVariants} />
          )}
        </ScModalSimilarProductsItemDescription>
      </section>

      {(tablet || mobile) && (
        <ScModalSimilarProductsRatingBlockTablet>
          <RatingStar rating={item.rating} />
          <Link url={item.url}>{`${item.reviewsCount} отзывов`}</Link>
        </ScModalSimilarProductsRatingBlockTablet>
      )}

      <ScModalSimilarProductsTotalBlock>
        <div>
          {(tablet || mobile) && item.productVariants && (
            <ProductCountSelector data={item.productVariants} />
          )}

          <PriceBlock
            price={item.price}
            priceOld={item.oldPrice}
            priceForOne={item.priceForOne}
            directionColumn
          />
        </div>

        <Button onClick={() => buyButtonHandler(item)} md>
          {t('Купить')}
        </Button>
      </ScModalSimilarProductsTotalBlock>
    </ScModalSimilarProductsItem>
  ));
  return (
    <ModalBase
      portalClassName="modal-similar-products"
      modalWidth={modalWidth}
      opened={opened}
      title="Подобрать замену"
      closeModal={closeModal}
    >
      {items}
    </ModalBase>
  );
};

ModalSimilarProducts.propTypes = {
  opened: bool.isRequired,
  closeModal: func.isRequired,
  modalWidth: number.isRequired,
  data: arrayOf(object),
};
