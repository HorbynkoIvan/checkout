import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderSC } from './styled';

import { ReactComponent as LogoIcon } from '../../assets/img/logo.svg';
import { PhoneDropdown } from '../PhoneDropdown/PhoneDropdown';
import { ButtonAsLink } from '../Buttons/ButtonAsLink/ButtonAsLink';
import { ModalCallRequest } from '../Modals/ModalCallRequest/ModalCallRequest';
import { pageLangParamRedesign } from '../../helpers/helpers';

export const Header = () => {
  const [isOpenModalCallRequest, setIsOpenModalCallRequest] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <ModalCallRequest
        opened={isOpenModalCallRequest}
        closeModalHandler={() => setIsOpenModalCallRequest(false)}
      />
      <HeaderSC>
        <section>
          <a href={pageLangParamRedesign}>
            <LogoIcon />
          </a>

          <div>
            <ButtonAsLink onClick={() => setIsOpenModalCallRequest(true)}>
              {t('Заказать звонок')}
            </ButtonAsLink>

            <PhoneDropdown
              data={[
                { number: '0 800 20 97 73' },
                { number: '044 232 97 73' },
                { number: '093 170 07 70' },
              ]}
            />
          </div>
        </section>
      </HeaderSC>
    </>
  );
};
