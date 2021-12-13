import React from 'react';
import { useTranslation } from 'react-i18next';
import { string } from 'prop-types';

import { ScProductCardBlockInform } from './styled';
import { ReactComponent as ArrowDownIcon } from '../../assets/img/arrow-down.svg';
import { TooltipLib } from '../TooltipLib/TooltipLib';
import { Tooltip } from '../Tooltip/Tooltip';

export const ProductCardBlockInform = ({ option }) => {
  const { t } = useTranslation();
  return (
    <ScProductCardBlockInform option={option}>
      {option === 'priceDown' && t('Цена снизилась')}
      {option === 'priceDown' && <ArrowDownIcon />}

      {option === 'oversized' && t('Крупногабаритный товар')}
      {option === 'oversized' && (
        <TooltipLib
          tooltipText={t(
            'Это товар, высота, ширина и длина которого в сумме превышают 150 см. Такие посылки требуют дополнительных ресурсов во время транспортировки и разгрузки, поэтому их доставка обычно стоит дороже'
          )}
        />
      )}

      {/* {option === 'oversized' && ( */}
      {/*  <Tooltip */}
      {/*    rightTooltip */}
      {/*    topTooltip */}
      {/*    tooltipText={t( */}
      {/*      'Это товар, высота, ширина и длина которого в сумме превышают 150 см. Такие посылки требуют дополнительных ресурсов во время транспортировки и разгрузки, поэтому их доставка обычно стоит дороже' */}
      {/*    )} */}
      {/*  /> */}
      {/* )} */}
    </ScProductCardBlockInform>
  );
};

ProductCardBlockInform.propTypes = {
  option: string,
};
