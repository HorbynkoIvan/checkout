import React, { useContext } from 'react';

import { useTranslation } from 'react-i18next';
import { TitleInner } from '../Title';
import DepartmentSelector from '../Selectors/DepartmentSelector';
import { DeliveryDepartmentStyled, RowStyled } from './styled';

import { ReactComponent as AttentionIcon } from '../../assets/img/attention.svg';
import { CheckoutContext } from '../../context';
import { NOVA_POSHTA_ID } from '../../constants';
import { InfoBlock } from '../InfoBlocks/InfoBlock/InfoBlock';

export const DeliveryDepartment = () => {
  const { t } = useTranslation();
  const {
    formData,
    checkoutData: { hasOversizedProducts },
  } = useContext(CheckoutContext);
  return (
    <DeliveryDepartmentStyled>
      <TitleInner>{t('Отделение')}</TitleInner>

      {formData.deliveryMethod === NOVA_POSHTA_ID && hasOversizedProducts && (
        <InfoBlock className="np_cargo_warning">
          <AttentionIcon />
          <div className="np_cargo_text">
            {t(
              'Доступны только грузовые отделения Новой почты, так как в заказе есть крупногабаритный товар'
            )}
          </div>
        </InfoBlock>
      )}

      <RowStyled>
        <DepartmentSelector />
      </RowStyled>
    </DeliveryDepartmentStyled>
  );
};
