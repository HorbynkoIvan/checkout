import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FinishBlock } from '../../components/FinishBlock';
import ButtonAsLink from '../../components/Buttons/ButtonAsLink';
import ButtonRounded from '../../components/Buttons/ButtonRounded';
import InfoLabel from '../../components/InfoLabel';
import { TitleSub } from '../../components/Title';
import InfoBlock from '../../components/InfoBlocks/InfoBlock';
import insta from '../../assets/img/social/insta.svg';
import facebook from '../../assets/img/social/facebook.svg';

import { ThankYouPageSC, RowSC, TitleSC } from './styled';

// mock
import gallery1 from '../../assets/img/galleryMock/gallery1.png';
import gallery2 from '../../assets/img/galleryMock/gallery2.png';
import gallery3 from '../../assets/img/galleryMock/gallery3.png';
import gallery4 from '../../assets/img/galleryMock/gallery4.png';
// import { ServiceCart } from '../../../services/ServiceCart';
import { Header } from '../../components/Header/Header';

const imageGalery = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
];

export const ThankYouPage = () => {
  const { t } = useTranslation();
  const [cartData, setCartData] = useState({
    isNewUser: false,
    mobile: '',
    email: '',
    orderNumber: '',
    imagesGallery: imageGalery,
    hasPreorderedProducts: false,
  });

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('checkoutData'));
    // setCartData(data);
  }, []);

  return (
    <>
      <Header />
      <ThankYouPageSC>
        <TitleSC>{t('Спасибо за покупку!')}</TitleSC>
        <RowSC>
          <FinishBlock
            isNewUser={cartData.isNewUser}
            phone={cartData.mobile}
            email={cartData.email}
            orderNumber={cartData.orderNumber}
            imagesGallery={cartData.imagesGallery}
            hasPreorderedProducts={cartData.hasPreorderedProducts}
          />
          <div>
            <InfoBlock className="thank_info">
              <InfoLabel bonus className="label" />
              <TitleSub>{t('Получайте бонусы за покупки друзей!')}</TitleSub>
              <p className="text">
                {t('Приглашайте друзей и получайте бонусы за их покупки')}
              </p>
              <ButtonAsLink
                onClick={() =>
                  (window.location.href =
                    'https://pampik.com/promo/privodi-druzej---poluchaj-bonusyi-na-pokupki')}
              >
                {t('Узнать больше')}
              </ButtonAsLink>
            </InfoBlock>

            <InfoBlock className="thank_info">
              <InfoLabel review className="label" />
              <TitleSub>
                {t('Что-то можно улучшить?')}
                <br />
                {t('Посоветуйте нам!')}
              </TitleSub>
              <ButtonAsLink
                onClick={() =>
                  (window.location.href = 'https://pampik.com/feedback')}
              >
                {t('Оставить отзыв')}
              </ButtonAsLink>
            </InfoBlock>

            <InfoBlock className="social_info">
              <TitleSub>{t('Мы в соцсетях')}</TitleSub>
              <p className="text">
                {t('Полезные советы, выгодные спецпредложения, конкурсы')}
              </p>
              <div>
                <ButtonRounded
                  srcImage={insta}
                  onClick={() =>
                    (window.location.href =
                      'https://www.instagram.com/pampik_com')}
                />
                <ButtonRounded
                  srcImage={facebook}
                  onClick={() =>
                    (window.location.href = 'https://www.facebook.com/pampik')}
                />
              </div>
            </InfoBlock>
          </div>
        </RowSC>
      </ThankYouPageSC>
    </>
  );
};

ThankYouPage.propTypes = {};
