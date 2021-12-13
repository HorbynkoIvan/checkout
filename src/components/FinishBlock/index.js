import React from 'react';
import { bool, array, string } from 'prop-types';

import { useTranslation } from 'react-i18next';
import Button from '../Buttons/Button';
import { TitleSub } from '../Title';
import { ImagesGallery } from '../ImagesGallery';
import InfoBlock from '../InfoBlocks/InfoBlock';

import { FinishBlockSC, TextBlockSC } from './styled';
import { pageLangParamRedesign } from '../../helpers/helpers';

export const FinishBlock = ({
  phone,
  email,
  orderNumber,
  imagesGallery,
  isNewUser,
  hasPreorderedProducts,
}) => {
  const { t } = useTranslation();
  return (
    <FinishBlockSC>
      {isNewUser && (
        <InfoBlock className="finish_info">
          <TitleSub>
            {t('Поздравляем с регистрацией в нашем интернет-магазине!')}
          </TitleSub>
          <p className="info_text">
            {t('На ваш электронный адрес')} {email}{' '}
            {t('отправлено сообщение с паролем от вашего аккаунта')}
          </p>
        </InfoBlock>
      )}

      <TitleSub>
        {t('Ваш заказ')} №{orderNumber} {t('принят')}
      </TitleSub>

      <ImagesGallery data={imagesGallery} />

      <TextBlockSC>
        <p>
          {t('Мы отправим письмо-подтверждение заказа на электронный адрес')}
          <br />
          {email}
        </p>
        {/* if there is no "ЗТ" in cart */}
        {!hasPreorderedProducts ? (
          <p>
            {t(
              'Вы получите sms или viber-сообщение с суммой к оплате и информацией о доставке на номер'
            )}{' '}
            +38{phone}
          </p>
        ) : (
          <p>
            {t('Наш оператор свяжется с вами по номеру')} +38{phone}{' '}
            {t('для уточнения деталей вашего заказа.')}
          </p>
        )}
      </TextBlockSC>

      <Button
        className="btn"
        bgColor="#FF7F00"
        textColor="#ffffff"
        onClick={() => {
          window.location.href = pageLangParamRedesign;
        }}
      >
        {t('Продолжить покупки')}
      </Button>
    </FinishBlockSC>
  );
};

FinishBlock.propTypes = {
  isNewUser: bool.isRequired,
  phone: string.isRequired,
  email: string.isRequired,
  orderNumber: string.isRequired,
  imagesGallery: array.isRequired,
  hasPreorderedProducts: bool.isRequired,
};
