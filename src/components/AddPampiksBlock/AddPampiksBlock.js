import React from 'react';
import { any } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { ScAddPampiksBlock } from './styled';

export const AddPampiksBlock = ({ count = '0' }) => {
  const { t } = useTranslation();
  return (
    <ScAddPampiksBlock>
      {`+${count} `}
      {t('пампиков')}
    </ScAddPampiksBlock>
  );
};

AddPampiksBlock.propTypes = {
  count: any.isRequired,
};
