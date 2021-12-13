import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  CartTopSC,
  CartSC,
  CartContentSC,
  CartTotalBlockSC,
  CartOrderSC,
  CartIsRegisteredBlockSC,
  CartInfoBlockSC,
} from './styled';
import { ProductCard } from '../../../components/ProductCard/ProductCard';

import { Tabs } from '../../../components/Tabs/Tabs';
import { IsRegistered } from '../../../components/IsRegistered/IsRegistered';
import { ChevronLeftStyled } from '../../../components/Buttons/ButtonReturn/styled';
import { CartOrder } from '../../../components/CartOrder/CartOrder';
import TogetherCheaper from '../../../components/TogetherCheaper';
import { ModalShareCartBase } from '../../../components/Modals/ModalShareCartBase/ModalShareCartBase';
import { ProductCardListing } from '../../../components/ProductCardListing/ProductCardListing';
import { EmptyCart } from '../../../components/EmptyCart/EmptyCart';
import { ServiceCart } from '../../../services/ServiceCart';
import { CartContext } from '../../../context';
import { SpecialInfoBlockOversized } from '../../../components/SpecialInfoBlocks/SpecialInfoBlockOversized/SpecialInfoBlockOversized';
import { ServiceCustomer } from '../../../services/ServiceCustomer';
import { Header } from '../../../components/Header/Header';
import { ModalCheckoutBase } from '../../../components/Modals/ModalCheckoutBase/ModalCheckoutBase';
import { SpecialInfoBlockSimilarProducts } from '../../../components/SpecialInfoBlocks/SpecialInfoBlockSimilarProducts/SpecialInfoBlockSimilarProducts';
import { ButtonAsLink } from '../../../components/Buttons/ButtonAsLink/ButtonAsLink';
import { pageLangParamRedesign } from '../../../helpers/helpers';
import { SpecialInfoBlockFreeLogistic } from '../../../components/SpecialInfoBlocks/SpecialInfoBlockFreeLogistic/SpecialInfoBlockFreeLogistic';
import { ModalPromo } from '../../../components/Modals/ModalPromo/ModalPromo';
import { Preloader } from '../../../components/Preloader/Preloader';

export const Cart = () => {
  const cartContext = useContext(CartContext);
  const cartState = cartContext.state.dataCart;
  const cartSpecialInfoBlockState = cartContext.state.specialInfoBlockState;
  const [wishlist] = useState();
  const [isOpenModalAuth, setIsOpenModalAuth] = useState(false);
  const [isOpenModalShareCart, setIsOpenModalShareCart] = useState(false);
  const [isOpenModalFreeLogistic, setIsOpenModalFreeLogistic] = useState(false);
  const [tabsActive, setTabsActive] = useState('cart');
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      try {
        const res = await ServiceCart.getCart();
        cartContext.addDataCart(res);
      } catch (e) {
        console.log(e);
      }
    })();

    (async () => {
      try {
        const res = await ServiceCustomer.getWishList();
        cartContext.addDataToWishList(res.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const modalAuthClickHandler = () => {
    setIsOpenModalAuth(!isOpenModalAuth);
  };
  const modalShareCartClickHandler = () => {
    setIsOpenModalShareCart(!isOpenModalShareCart);
  };

  const modalPromoClickHandler = () => {
    setIsOpenModalFreeLogistic(!isOpenModalFreeLogistic);
  };

  const closeSpecialInfoBlock = (item) => {
    cartContext.hideSpecialInfoBlock(item);
  };

  return (
    <>
      <Header />

      {cartState ? (
        <CartSC>
          <ModalCheckoutBase
            opened={isOpenModalAuth}
            closeModal={modalAuthClickHandler}
          />

          <ModalShareCartBase
            opened={isOpenModalShareCart}
            closeModal={modalShareCartClickHandler}
          />

          <ModalPromo
            opened={isOpenModalFreeLogistic}
            closeModal={modalPromoClickHandler}
          />

          <CartTopSC>
            <ButtonAsLink
              onClick={() => (window.location.href = pageLangParamRedesign)}
              icon={<ChevronLeftStyled color="#807c77" />}
            >
              {t('Вернуться к покупкам')}
            </ButtonAsLink>
          </CartTopSC>

          <CartContentSC>
            <CartOrderSC
              isEmptyCart={
                cartState.products && cartState.products.length === 0
              }
            >
              <CartIsRegisteredBlockSC>
                <IsRegistered
                  name={(cartState.customer && cartState.customer.name) || ''}
                  clickHandler={modalAuthClickHandler}
                />
              </CartIsRegisteredBlockSC>

              {((cartSpecialInfoBlockState.hasOversizedProducts &&
                cartState.hasOversizedProducts) ||
                (cartSpecialInfoBlockState.notAvailableProducts &&
                  cartState.notAvailableProducts &&
                  cartState.notAvailableProducts.length > 0) ||
                (cartSpecialInfoBlockState.freeLogistic &&
                  cartState.freeDeliveryPromoOffers &&
                  cartState.freeDeliveryPromoOffers.length > 0)) && (
                <CartInfoBlockSC>
                  {cartSpecialInfoBlockState.hasOversizedProducts &&
                    cartState.hasOversizedProducts && (
                      <SpecialInfoBlockOversized
                        clickHideHandler={() => {
                          closeSpecialInfoBlock('hasOversizedProducts');
                        }}
                      />
                    )}

                  {!cartState.hasOversizedProducts &&
                    cartSpecialInfoBlockState.freeLogistic &&
                    cartState.freeDeliveryPromoOffers &&
                    cartState.freeDeliveryPromoOffers.length > 0 && (
                      <SpecialInfoBlockFreeLogistic
                        labelOptions={{
                          delivery: true,
                          big: true,
                        }}
                        clickHideHandler={() => {
                          closeSpecialInfoBlock('freeLogistic');
                        }}
                        clickHandlerModal={() => {
                          setIsOpenModalFreeLogistic(true);
                        }}
                      />
                    )}

                  {cartSpecialInfoBlockState.notAvailableProducts &&
                    cartState.notAvailableProducts &&
                    cartState.notAvailableProducts.length > 0 && (
                      <SpecialInfoBlockSimilarProducts
                        labelOptions={{
                          warning: true,
                          big: true,
                        }}
                        dropdown={cartState.notAvailableProducts}
                        clickHideHandler={() => {
                          closeSpecialInfoBlock('notAvailableProducts');
                        }}
                      />
                    )}

                  {/* {cartSpecialInfoBlockState.addProductForFreeLogistic && */}
                  {/*  cartState.amountForFreeShipping > 0 && ( */}
                  {/*    <SpecialInfoBlockShipping */}
                  {/*      amountForFreeShipping={ */}
                  {/*        cartState.amountForFreeShipping */}
                  {/*      } */}
                  {/*      clickHideHandler={() => { */}
                  {/*        closeSpecialInfoBlock('addProductForFreeLogistic'); */}
                  {/*      }} */}
                  {/*      linkUrl={i18n.language === 'ru-RU' ? '/' : '/ua'} */}
                  {/*    /> */}
                  {/*  )} */}

                  {/* {cartSpecialInfoBlockState.gift && ( */}
                  {/*  <SpecialInfoBlockGift */}
                  {/*    clickHideHandler={() => { */}
                  {/*      closeSpecialInfoBlock('gift'); */}
                  {/*    }} */}
                  {/*  /> */}
                  {/* )} */}

                  {/* <SpecialInfoBlockFreeLogistic */}
                  {/*  clickHandlerModal={modalPromoClickHandler} */}
                  {/*  labelOptions={{ */}
                  {/*    delivery: true, */}
                  {/*    big: true, */}
                  {/*  }} */}
                  {/* /> */}
                </CartInfoBlockSC>
              )}

              <div className="order__title">
                <b>{t('Ваш заказ')} </b>
                {cartState.products &&
                  cartState.products.length > 0 &&
                  `№${cartState.orderNumber || ''}`}
              </div>

              <div className="order__tabs">
                <Tabs
                  clickHandler={(name) => setTabsActive(name)}
                  activeName={tabsActive}
                  data={cartContext.state.tabs.notLogin}
                  cartProductsQuantity={cartState.quantity || ''}
                />
              </div>

              {cartState.products && cartState.products.length === 0 && (
                <div className="empty-cart">
                  <EmptyCart />
                </div>
              )}

              {cartState &&
                cartState.products.length > 0 &&
                cartState.products.map(
                  (product, i) =>
                    product.isProductSet && (
                      <TogetherCheaper key={i} product={product} />
                    )
                )}

              {cartState.products && cartState.products.length > 0 && (
                <div className="order__list">
                  {tabsActive === 'cart' && (
                    <ProductCard
                      modalAuthClickHandler={modalAuthClickHandler}
                      data={cartState.products}
                    />
                  )}
                  {wishlist && tabsActive === 'wishList' ? (
                    <ProductCardListing data={wishlist} />
                  ) : null}
                  {tabsActive === 'buyAgain' && (
                    <ProductCard buyAgain data={cartState.productsBuyAgain} />
                  )}
                </div>
              )}

              {/* <div className="share-cart"> */}
              {/*  <ButtonAsLink */}
              {/*    onClick={modalShareCartClickHandler} */}
              {/*    icon={<ShareIcon />} */}
              {/*  > */}
              {/*    {t('Поделиться корзиной')} */}
              {/*  </ButtonAsLink> */}
              {/* </div> */}

              {/* {tabsActive === 'cart' && ( */}
              {/*  <div className="share-cart"> */}
              {/*    <ButtonAsLink */}
              {/*      onClick={modalShareCartClickHandler} */}
              {/*      icon={<ShareIcon />} */}
              {/*    > */}
              {/*      {t('Поделиться корзиной')} */}
              {/*    </ButtonAsLink> */}
              {/*  </div> */}
              {/* )} */}
            </CartOrderSC>
            {cartState.products && cartState.products.length > 0 && (
              <CartTotalBlockSC>
                <CartOrder modalClickhandler={modalAuthClickHandler} />
              </CartTotalBlockSC>
            )}
          </CartContentSC>
        </CartSC>
      ) : (
        <Preloader fixed />
      )}
    </>
  );
};
