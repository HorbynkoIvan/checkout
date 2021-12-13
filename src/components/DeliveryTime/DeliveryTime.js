import React from 'react';

import { useTranslation } from 'react-i18next';
import { TitleInner } from '../Title';
import TimeSelector from '../Selectors/TimeSelector';
import DatepickerSelector from '../Selectors/DatepickerSelector';
import { DeliveryTimeSC, RowSC } from './styled';

export const DeliveryTime = () => {
  const { t } = useTranslation();
  return (
    <DeliveryTimeSC>
      <TitleInner>{t('Дата и время доставки')}</TitleInner>
      <RowSC>
        <DatepickerSelector />
        <TimeSelector />
      </RowSC>
    </DeliveryTimeSC>
  );
};
