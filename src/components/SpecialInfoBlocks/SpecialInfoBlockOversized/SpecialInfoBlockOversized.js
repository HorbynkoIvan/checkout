import React from 'react';
import { func } from 'prop-types';

import { useTranslation } from 'react-i18next';
import { SpecialInfoBlockBase } from '../SpecialInfoBlockBase/SpecialInfoBlockBase';

export const SpecialInfoBlockOversized = ({ clickHideHandler }) => {
  const { t } = useTranslation();
  const blockBaseTitleContent = (
    <div>
      <span>
        {t(
          'Внимание! Доставка платная, так как в заказе есть крупногабаритный товар'
        )}
      </span>
    </div>
  );
  return (
    <SpecialInfoBlockBase
      clickHideHandler={clickHideHandler}
      labelOptions={{
        delivery: true,
        big: true,
      }}
      title={blockBaseTitleContent}
    />
  );
};

SpecialInfoBlockOversized.propTypes = {
  clickHideHandler: func,
};
