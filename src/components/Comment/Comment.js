import React, { useContext } from 'react';
import { string } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { LabelStyled } from './styled';
import { CheckoutContext } from '../../context';

export const Comment = ({ placeholder, className }) => {
  const { t } = useTranslation();
  const { formData, setFormData } = useContext(CheckoutContext);

  const handleChange = (e) => {
    setFormData({ comment: e.target.value });
  };

  return (
    <div className={className}>
      <LabelStyled>
        <span>{t('Комментарий')}</span>
        <textarea
          onChange={handleChange}
          value={formData.comment}
          placeholder={placeholder}
          maxLength={1000}
        />
      </LabelStyled>
    </div>
  );
};

Comment.propTypes = {
  placeholder: string,
  className: string,
};
