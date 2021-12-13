import React, { useContext, useState } from 'react';

import { object } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { ReactComponent as DeleteIcon } from '../../assets/img/delete-icon.svg';
import {
  ProductItem,
  TogetherCheaperContentSC,
  TogetherCheaperFooterSC,
  TogetherCheaperSC,
  TogetherCheaperTopSC,
} from './styled';

import { ReactComponent as AddIcon } from '../../assets/img/add-icon.svg';
import { CountSpinner } from '../CountSpinner/CountSpinner';
import { PriceBlock } from '../PriceBlock/PriceBlock';
import { AddPampiksBlock } from '../AddPampiksBlock/AddPampiksBlock';
import { ServiceCart } from '../../services/ServiceCart';
import { CartContext } from '../../context';
import { Preloader } from '../Preloader/Preloader';

export const TogetherCheaper = ({ product }) => {
  const { t } = useTranslation();
  const {
    setCode,
    url,
    image,
    name,
    quantity,
    sku,
    price,
    discountPrice,
    secondary,
    bundlePrice,
    regularPrice,
    loyaltyEarned,
  } = product;
  const [isDisabledDeleteButton, setIsDisabledDeleteButton] = useState(false);
  const cartContext = useContext(CartContext);
  const [isShowPreloader, setIsShowPreloader] = useState(false);

  const deleteProductInCart = async () => {
    setIsDisabledDeleteButton(true);
    try {
      const res = await ServiceCart.deleteProduct(null, setCode);
      cartContext.updateProductCountInCart(res, setCode);
    } catch (e) {
      console.log(e);
    }
    setIsDisabledDeleteButton(false);
  };

  return (
    <TogetherCheaperSC isDisabledDeleteButton={isDisabledDeleteButton}>
      {isShowPreloader === setCode ? <Preloader /> : null}

      <TogetherCheaperTopSC>
        <span>{t('Вместе дешевле')}</span>

        <button
          className="together-dlt"
          type="button"
          onClick={deleteProductInCart}
        >
          <DeleteIcon />
        </button>
      </TogetherCheaperTopSC>

      <TogetherCheaperContentSC>
        <ProductItem>
          <a href={url}>
            <img src={image} alt={name} />
          </a>

          <div>
            <a href="#">{name}</a>

            <a href="#">
              {t('Артикул')} - {sku}
            </a>

            <div>
              <span>{quantity}</span>

              <PriceBlock
                directionRowReverse
                price={discountPrice}
                priceOld={price}
                quantity={quantity}
                isQuantityHide
                isOldPriceProgressive
              />
            </div>
          </div>
        </ProductItem>
        <AddIcon />
        <ProductItem>
          <a href={secondary.url}>
            <img src={secondary.image} alt={secondary.name} />
          </a>

          <div>
            <a href="#">{secondary.name}</a>

            <a href="#">
              {t('Артикул')} - {secondary.sku}
            </a>

            <div>
              <span>{secondary.quantity}</span>

              <PriceBlock
                directionRowReverse
                price={secondary.discountPrice}
                priceOld={secondary.price}
                quantity={quantity}
                isQuantityHide
                isOldPriceProgressive
              />
            </div>
          </div>
        </ProductItem>
      </TogetherCheaperContentSC>

      <TogetherCheaperFooterSC>
        <CountSpinner
          data={quantity}
          setCode={setCode}
          preloaderHandler={setIsShowPreloader}
          item={setCode}
        />

        <div>
          <PriceBlock
            directionRowReverse
            price={bundlePrice}
            priceOld={regularPrice}
            quantity={quantity}
            isQuantityHide
            isOldPriceProgressive
          />
          <AddPampiksBlock count={loyaltyEarned} />
        </div>
      </TogetherCheaperFooterSC>
    </TogetherCheaperSC>
  );
};

TogetherCheaper.propTypes = {
  product: object.isRequired,
};
