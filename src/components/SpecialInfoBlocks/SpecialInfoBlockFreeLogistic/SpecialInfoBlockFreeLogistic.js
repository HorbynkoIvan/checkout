import React from 'react';
import { any, func } from 'prop-types';

import { useTranslation } from 'react-i18next';
import { SpecialInfoBlockBase } from '../SpecialInfoBlockBase/SpecialInfoBlockBase';
import { ButtonAsLink } from '../../Buttons/ButtonAsLink/ButtonAsLink';

export const SpecialInfoBlockFreeLogistic = ({
  labelOptions,
  clickHideHandler,
  clickHandlerModal,
}) => {
  const { t } = useTranslation();
  const blockBaseTitleContent = (
    <div>
      <p>{t('Ура! Бесплатная доставка заказа. Вы выполнили условия')}</p>

      <ButtonAsLink onClick={clickHandlerModal}>{t('акции')}</ButtonAsLink>
    </div>
  );
  return (
    <SpecialInfoBlockBase
      clickHideHandler={clickHideHandler}
      labelOptions={labelOptions}
      title={blockBaseTitleContent}
    />
  );
};

SpecialInfoBlockFreeLogistic.propTypes = {
  labelOptions: any,
  clickHideHandler: func,
  clickHandlerModal: func,
};
