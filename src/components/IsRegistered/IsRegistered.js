import React from 'react';
import { func, string } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { ScIsRegistered } from './styled';
import { ButtonAsLink } from '../Buttons/ButtonAsLink/ButtonAsLink';

export const IsRegistered = ({ name, clickHandler }) => {
  const { t } = useTranslation();
  return (
    <ScIsRegistered>
      {!name && (
        <>
          <span>{t('Зарегистрированы?')}</span>
          <ButtonAsLink onClick={clickHandler}>
            {t('Войдите в аккаунт')}
          </ButtonAsLink>
        </>
      )}
      {name && (
        <span>
          {t('Добрый день')}, {name}! {t('Мы скучали')})
        </span>
      )}
    </ScIsRegistered>
  );
};

IsRegistered.propTypes = {
  name: string,
  clickHandler: func,
};
