import React, { useContext, useEffect, useRef, useState } from 'react';
import { any, bool, func } from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  ProductCardItemContentDeleteControlSC,
  ProductCardItemContentDescriptionSC,
  ProductCardItemContentSC,
  ProductCardItemContentTotalSC,
  ProductCardItemErrorSC,
  ProductCardItemGiftImgBlockSC,
  ProductCardItemGiftSC,
  ProductCardItemPreorderSC,
  ProductCardItemSC,
  ScProductCard,
} from './styled';
import { desktop, mobile, tablet } from '../../assets/css/theme';
import { CountSpinner } from '../CountSpinner/CountSpinner';
import { AddPampiksBlock } from '../AddPampiksBlock/AddPampiksBlock';
import { PriceBlock } from '../PriceBlock/PriceBlock';
import { ProductCardBlockInform } from '../ProductCardBlockInform/ProductCardBlockInform';
import { ReactComponent as DeleteIcon } from '../../assets/img/delete-icon.svg';
import { InfoLabel } from '../InfoLabel/InfoLabel';
import { Button } from '../Buttons/Button/Button';
import { Pagination } from '../Pagination/Pagination';
import { ServiceCart } from '../../services/ServiceCart';
import { CartContext } from '../../context';
import { ButtonAsLink } from '../Buttons/ButtonAsLink/ButtonAsLink';
import { ModalAddToWishList } from '../Modals/ModalAddToWishList/ModalAddToWishList';

import { ReactComponent as HeartIcon } from '../../assets/img/heart-icon.svg';
import { Preloader } from '../Preloader/Preloader';

export const ProductCard = ({ data, buyAgain, modalAuthClickHandler }) => {
  const { t } = useTranslation();
  const showHideControlRef = useRef([]);
  const cartContext = useContext(CartContext);
  const [isDisabledDeleteButton, setIsDisabledDeleteButton] = useState(false);
  const [showHideControl, setShowHideControl] = useState(null);
  const [isOpenModalAddToWishList, setIsOpenModalAddToWishList] = useState(
    false
  );
  const [isShowPreloader, setIsShowPreloader] = useState(false);

  const handleClickOutside = (event) => {
    if (!showHideControlRef.current.includes(event.target)) {
      setShowHideControl(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);

  const modalAddToWishListClickHandler = (item) => {
    cartContext.addDataProductIdToWishList({
      productId: item.productId ? item.productId : null,
      item,
    });
    setIsOpenModalAddToWishList(true);
  };
  const btnShowHideControlComponent = (item) => {
    if (showHideControl === item.productId) {
      setShowHideControl(null);
    } else {
      setShowHideControl(item.productId);
    }
  };

  const deleteProductInCart = async (item) => {
    setIsDisabledDeleteButton(true);
    try {
      setIsShowPreloader(item);
      const res = await ServiceCart.deleteProduct(item.productId);
      cartContext.deleteProductCountInCart(res, item.productId);
    } catch (e) {
      console.log(e);
    } finally {
      setIsDisabledDeleteButton(false);
      setIsShowPreloader(false);
    }
  };

  // const removeGift = async (id) => {
  //   try {
  //     const res = await ServiceCart.removeGift(id);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const items = data.map((item, i) => {
    if (item.isProductSet) return;
    return (
      <div key={i}>
        {isShowPreloader === item ? <Preloader /> : null}

        {cartContext.state.productsWithErrors.includes(item.productId) && (
          <ProductCardItemErrorSC>
            {t('Пожалуйста, повторите действие еще раз')}
          </ProductCardItemErrorSC>
        )}

        <section>
          <ProductCardItemSC isPreordered={item.isPreordered}>
            {item.isPreordered && (
              <ProductCardItemPreorderSC>
                <span>
                  <span>{t('Товар под заказ')}</span>
                  {t('Дату доставки согласует оператор')}
                </span>
              </ProductCardItemPreorderSC>
            )}

            {item.isOversized && <ProductCardBlockInform option="oversized" />}

            <div>
              <a href={item.url}>
                <img src={item.image} alt={`product-img-${i}`} />
              </a>

              <section>
                {desktop &&
                  !item.isOversized &&
                  item.validation &&
                  item.validation.oldPrice && (
                    <ProductCardBlockInform option="priceDown" />
                  )}

                <ProductCardItemContentSC buyAgain={buyAgain}>
                  <ProductCardItemContentDescriptionSC>
                    <div>
                      <a href={item.url}>
                        <span>{item.name}</span>

                        <span>{`${t('Артикул')} - ${item.sku}`}</span>
                      </a>

                      {item.expiryDate && (
                        <div>
                          {`${t('Срок годности')} - ${item.expiryDate}`}
                        </div>
                      )}
                    </div>

                    {item.options && item.options.expiryDate && (
                      <span>{item.options.expiryDate}</span>
                    )}
                  </ProductCardItemContentDescriptionSC>

                  {(tablet || mobile) &&
                    !item.isOversized &&
                    item.validation &&
                    item.validation.oldPrice && (
                      <ProductCardBlockInform option="priceDown" />
                    )}

                  <ProductCardItemContentTotalSC buyAgain={buyAgain}>
                    {!buyAgain && (
                      <div>
                        <CountSpinner
                          itemId={item.productId}
                          data={item.quantity}
                          item={item}
                          preloaderHandler={setIsShowPreloader}
                        />
                      </div>
                    )}

                    <div>
                      <PriceBlock
                        price={item.price}
                        priceOld={
                          item.oldPrice > 0 && item.oldPrice > item.price
                            ? item.oldPrice
                            : null
                        }
                        quantity={item.quantity}
                        directionColumn
                      />

                      {item.loyaltyEarned && (
                        <AddPampiksBlock count={item.loyaltyEarned} />
                      )}

                      {buyAgain && (
                        <Button md onClick={() => console.log('click')}>
                          {t('Купить')}
                        </Button>
                      )}
                    </div>
                  </ProductCardItemContentTotalSC>

                  {!buyAgain && (
                    <ProductCardItemContentDeleteControlSC
                      isDisabledDeleteButton={isDisabledDeleteButton}
                    >
                      <button
                        ref={(element) => {
                          showHideControlRef.current[i] = element;
                        }}
                        type="button"
                        onClick={() => btnShowHideControlComponent(item)}
                      >
                        <DeleteIcon />
                      </button>

                      {showHideControl === item.productId && (
                        <section>
                          <ButtonAsLink
                            onClick={() => {
                              if (cartContext.state.dataCart.customer) {
                                modalAddToWishListClickHandler(item);
                              } else {
                                modalAuthClickHandler(true);
                              }
                            }}
                            icon={<HeartIcon />}
                          >
                            {t('В Желания')}
                          </ButtonAsLink>

                          <ButtonAsLink
                            onClick={() => deleteProductInCart(item)}
                            icon={<DeleteIcon />}
                          >
                            {t('Удалить')}
                          </ButtonAsLink>
                        </section>
                      )}
                    </ProductCardItemContentDeleteControlSC>
                  )}
                </ProductCardItemContentSC>
              </section>
            </div>
          </ProductCardItemSC>

          {item.gifts && item.gifts.length
            ? item.gifts.map((gift, k) => (
                <ProductCardItemGiftSC key={k}>
                  <ProductCardItemGiftImgBlockSC as="a" href={gift.url}>
                    <InfoLabel present />

                    <img
                      src={gift.image}
                      alt={`product-img-gift-${gift.productId}`}
                    />
                  </ProductCardItemGiftImgBlockSC>

                  <ProductCardItemContentSC className="card-gift__wrapper">
                    <ProductCardItemContentDescriptionSC className="card-gift__block">
                      <div>
                        <a href={gift.url}>
                          <span>{gift.name}</span>

                          <span>{`${t('Артикул')} - ${gift.productId}`}</span>
                        </a>

                        <p>{`${gift.price} грн`}</p>
                      </div>
                    </ProductCardItemContentDescriptionSC>
                  </ProductCardItemContentSC>

                  {/* <ProductCardItemContentDeleteControlSC */}
                  {/*  onClick={() => removeGift(gift.productId)} */}
                  {/*  className="card-gift__delete" */}
                  {/* > */}
                  {/*  <DeleteIcon /> */}
                  {/* </ProductCardItemContentDeleteControlSC> */}
                </ProductCardItemGiftSC>
              ))
            : null}
        </section>
      </div>
    );
  });
  return (
    <ScProductCard>
      <ModalAddToWishList
        opened={isOpenModalAddToWishList}
        modalWidth={504}
        closeModal={() => setIsOpenModalAddToWishList(false)}
        preloaderHandler={setIsShowPreloader}
      />

      {items}
      {buyAgain && <Pagination />}
    </ScProductCard>
  );
};

ProductCard.propTypes = {
  data: any,
  buyAgain: bool,
  modalAuthClickHandler: func,
};
