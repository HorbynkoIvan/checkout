import React, { useContext, useEffect, useState } from 'react';
import { func } from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  UsePampiksStyled,
  UsePampiksTopStyled,
  UsePampiksBottomStyled,
  ChevronIconStyled,
  InfoContainerStyled,
  InfoCountStyled,
  HrStyled,
  InfoContainerButtonCancelStyled,
} from './styled';
import Button from '../Buttons/Button';
import { UsePampiksRadio } from './UsePampiksRadio';
import ButtonAsLink from '../Buttons/ButtonAsLink';
import { ReactComponent as PlusIcon } from '../../assets/img/plus.svg';
import SuccessBlock from '../SucessBlock';
import { ServiceCart } from '../../services/ServiceCart';
import { CartContext } from '../../context';
import { InfoBlockAttention } from '../InfoBlocks/InfoBlockAttention/InfoBlockAttention';
import { Preloader } from '../Preloader/Preloader';

export const UsePampiks = ({ setIsOpenBlockPampiks }) => {
  const [isOpen, setOpen] = useState(false);
  const [isShowedForm, setShowForm] = useState(true);
  const { t } = useTranslation();
  const cartContext = useContext(CartContext);
  const cartState = cartContext.state.dataCart;
  const [pending, setPending] = useState(false);
  const [isShowPreloader, setIsShowPreloader] = useState(false);

  useEffect(() => {
    if (cartState.loyaltySpentUah > 0) {
      setShowForm(false);
      setOpen(true);
    }
  }, []);

  const applyLoyaltyPoints = () => {
    (async () => {
      if (pending !== true) {
        try {
          setPending(true);
          setIsShowPreloader(true);

          const res = await ServiceCart.applyLoyaltyPoints(
            cartContext.state.applyLoyaltyPoints >=
              cartState.totalPriceWithoutDelivery
              ? cartState.totalPriceWithoutDelivery
              : cartContext.state.applyLoyaltyPoints
          );
          if (res.status === 200) {
            cartContext.addDataCart(res);
            setShowForm(false);
          }
        } catch (e) {
          console.log(e);
        } finally {
          setPending(false);
          setIsShowPreloader(false);
        }
      }
    })();
  };

  const cancelApplyLoyaltyPoints = () => {
    (async () => {
      try {
        setIsShowPreloader(true);
        const res = await ServiceCart.cancelLoyaltyPoints();

        if (res.status === 200) {
          cartContext.addDataCart(res);
          cartContext.applyLoyaltyPoints(cartState.loyaltyPointsSumUah);
          setOpen(true);
          setShowForm(true);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setIsShowPreloader(false);
      }
    })();
  };

  const applyAgainLoyaltyPoints = () => {
    (async () => {
      try {
        setIsShowPreloader(true);
        const res = await ServiceCart.cancelLoyaltyPoints();

        if (res.status === 200) {
          cartContext.addDataCart(res);
          cartContext.applyLoyaltyPoints(cartState.loyaltyPointsSumUah);
          setShowForm(true);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setIsShowPreloader(false);
      }
    })();
  };

  return (
    <UsePampiksStyled
      className="use_pampiks"
      usePampiksDisabled={!cartState.customer || !cartState.loyaltyPointsSum}
    >
      {isShowPreloader && <Preloader />}
      <UsePampiksTopStyled
        usePampiksDisabled={!cartState.customer || !cartState.loyaltyPointsSum}
        onClick={() => {
          if (cartState.customer && cartState.loyaltyPointsSum) {
            setOpen(!isOpen);
            setIsOpenBlockPampiks(!isOpen);
          }
        }}
      >
        <div>
          <p>{t('?????????????????????????????? ??????????????????')}</p>
        </div>
        <ChevronIconStyled
          $usePampiksDisabled={
            !cartState.customer && !cartState.loyaltyPointsSum
          }
          open={isOpen}
        />
      </UsePampiksTopStyled>

      {isOpen || cartState.loyaltySpentUah > 0 ? (
        <UsePampiksBottomStyled>
          <InfoBlockAttention>
            {t(
              '??????????! ?????? ???????????? ???????????? ???????????????? ?????????????? ?????????????? ???? ?????????????????????? ?? ????????????'
            )}
          </InfoBlockAttention>

          <HrStyled />
          <InfoContainerStyled>
            {cartState.loyaltySpentUah > 0 ? (
              <SuccessBlock>
                <div>
                  {t('?????????????? ??????????????')}{' '}
                  <span>{cartState.loyaltySpentUah} ??????</span> (
                  {cartState.loyaltySpent} {t('????????????????')})
                </div>
              </SuccessBlock>
            ) : null}

            {cartState.loyaltySpentUah > 0 ? (
              <InfoContainerButtonCancelStyled>
                <ButtonAsLink
                  onClick={cancelApplyLoyaltyPoints}
                  icon={<PlusIcon />}
                >
                  {t('???????????????? ????????????????')}
                </ButtonAsLink>
              </InfoContainerButtonCancelStyled>
            ) : null}

            {cartState.loyaltyPointsSumUah !== 0 && (
              <InfoCountStyled>
                {t('???? ??????????')} <span>{cartState.loyaltyPointsSumUah} ??????</span>{' '}
                ({cartState.loyaltyPointsSum} {t('????????????????')})
              </InfoCountStyled>
            )}

            {isShowedForm && cartState.loyaltyPointsSumUah !== 0 ? (
              <>
                <UsePampiksRadio />

                <Button className="btn" onClick={applyLoyaltyPoints}>
                  {t('?????????????? ??????????????')}
                </Button>
              </>
            ) : null}

            {!isShowedForm &&
            cartState.loyaltyPointsSumUah !== 0 &&
            cartState.totalPriceWithoutDelivery > 0 ? (
              <ButtonAsLink
                onClick={applyAgainLoyaltyPoints}
                icon={<PlusIcon />}
              >
                {t('?????????????? ??????')}
              </ButtonAsLink>
            ) : null}
          </InfoContainerStyled>
        </UsePampiksBottomStyled>
      ) : null}
    </UsePampiksStyled>
  );
};

UsePampiks.propTypes = {
  setIsOpenBlockPampiks: func,
};
