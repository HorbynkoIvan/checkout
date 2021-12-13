import React, { useContext, useEffect, useState } from 'react';
import { string } from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  UseCouponSC,
  UseCouponTopSC,
  UseCouponBottomSC,
  ChevronIconSC,
  HrSC,
  InfoContainerSC,
} from './styled';
import InputCoupon from '../Inputs/InputCoupon';
import ButtonAsLink from '../Buttons/ButtonAsLink';
import { ReactComponent as DeleteIcon } from '../../assets/img/delete.svg';
import SuccessBlock from '../SucessBlock';
import { InfoBlockAttention } from '../InfoBlocks/InfoBlockAttention/InfoBlockAttention';
import { ServiceCart } from '../../services/ServiceCart';
import { CartContext } from '../../context';
import { Preloader } from '../Preloader/Preloader';
import { ReactComponent as PlusIcon } from '../../assets/img/plus.svg';

export const UseCoupon = ({ className }) => {
  const cartContext = useContext(CartContext);
  const cartState = cartContext.state.dataCart;
  const { promoCodes } = cartState;
  const [isOpen, setOpen] = useState(false);
  const [isShowAddCouponForm, setIsShowAddCouponForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [isShowPreloader, setIsShowPreloader] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (promoCodes.length) {
      setOpen(true);
      setIsShowAddCouponForm(false);
    }
  }, []);

  useEffect(() => {
    if (!promoCodes.length) {
      setIsShowAddCouponForm(true);
    }
  }, [promoCodes]);

  const fetchApplyPromocode = async (promocodeValue) => {
    try {
      setIsShowPreloader(true);
      setErrorMessage('');

      const response = await ServiceCart.applyPromocode(promocodeValue);
      if (response.status === 200) {
        setIsShowAddCouponForm(false);
      }

      cartContext.addDataCart(response);
    } catch (error) {
      if (error.response.status === 400) {
        setIsShowAddCouponForm(true);
        setErrorMessage(error.response.data.errorMessage);
      }
      console.log('ServiceCart.applyPromocode ', error);
    } finally {
      setIsShowPreloader(false);
    }
  };

  const fetchRemovePromocode = async () => {
    try {
      setIsShowPreloader(true);

      const response = await ServiceCart.removePromocode(
        promoCodes[promoCodes.length - 1].promoCode
      );

      cartContext.addDataCart(response);
    } catch (e) {
      console.log('ServiceCart.removePromocode ', e);
    } finally {
      setIsShowPreloader(false);
    }
  };

  return (
    <UseCouponSC className={className}>
      {isShowPreloader && <Preloader />}

      <UseCouponTopSC onClick={() => setOpen(!isOpen)}>
        <div>
          <p>{t('Воспользоваться')}</p>

          <p>{t('Промокодом/Сертификатом')}</p>
        </div>

        <ChevronIconSC open={isOpen} />
      </UseCouponTopSC>

      {isOpen && (
        <UseCouponBottomSC>
          <InfoBlockAttention>
            {t(
              'Важно! При оплате картой «Пакунок малюка» промокоды и сертификаты не применяются к заказу'
            )}
          </InfoBlockAttention>

          <HrSC />

          <InfoContainerSC>
            {promoCodes.map((item, i) => {
              if (item.validated) {
                return (
                  <SuccessBlock key={i}>
                    <span>{item.promoCode}</span> {t('успешно применен')}
                  </SuccessBlock>
                );
              }
              return (
                <SuccessBlock key={i} error={!!item.errorMessage}>
                  <span>{item.promoCode}</span> {item.errorMessage}
                </SuccessBlock>
              );
            })}

            {errorMessage && (
              <SuccessBlock error={errorMessage}>{errorMessage}</SuccessBlock>
            )}

            {promoCodes.length > 0 && (
              <ButtonAsLink
                className="cancel-apply"
                onClick={fetchRemovePromocode}
                icon={<DeleteIcon />}
              >
                {t('Отменить применение')}
              </ButtonAsLink>
            )}

            {promoCodes.length > 0 && !isShowAddCouponForm && (
              <ButtonAsLink
                className="onemore"
                onClick={() => setIsShowAddCouponForm(true)}
                icon={<PlusIcon />}
              >
                {t('Применить еще один')}
              </ButtonAsLink>
            )}

            {isShowAddCouponForm && (
              <InputCoupon
                id="coupon"
                name="coupon"
                type="text"
                label={t('Промокод/Сертификат')}
                fetchApplyPromocode={fetchApplyPromocode}
              />
            )}
          </InfoContainerSC>
        </UseCouponBottomSC>
      )}
    </UseCouponSC>
  );
};

UseCoupon.propTypes = {
  className: string,
};
