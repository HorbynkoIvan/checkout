import React from 'react';
import { func, number, string, bool } from 'prop-types';

import { useTranslation } from 'react-i18next';
import SpecialInfoBlockBase from '../SpecialInfoBlockBase';
import Link from '../../Link';

export const SpecialInfoBlockShipping = ({
  clickHideHandler,
  amountForFreeShipping,
  linkUrl,
  simpleBlock,
}) => {
  const { t } = useTranslation();
  const blockBaseTitleContent = (
    <>
      {!simpleBlock ? (
        <p>
          {t('Добавьте в корзину товары на сумму')}{' '}
          <b>{amountForFreeShipping} грн</b>{' '}
          {t('и мы бесплатно доставим ваш заказ')}
        </p>
      ) : (
        <p>
          {t('До бесплатной доставки осталось')}{' '}
          <b>{amountForFreeShipping} грн</b>{' '}
        </p>
      )}

      {linkUrl && (
        <Link className="link" url={linkUrl}>
          {t('Добавить товар')}
        </Link>
      )}
    </>
  );
  return (
    <SpecialInfoBlockBase
      clickHideHandler={clickHideHandler}
      labelOptions={{ delivery: true, big: true }}
      title={blockBaseTitleContent}
      withoutDeleteButton={simpleBlock}
      simpleBlock
    />
  );
};

SpecialInfoBlockShipping.propTypes = {
  clickHideHandler: func,
  amountForFreeShipping: number,
  linkUrl: string,
  simpleBlock: bool,
};
