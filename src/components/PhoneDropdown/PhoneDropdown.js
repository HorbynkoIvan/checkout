import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { array } from 'prop-types';
import { ScPhoneDropdown } from './styled';

import { ReactComponent as ChevronIcon } from '../../assets/img/chevron.svg';

export const PhoneDropdown = ({ data }) => {
  const { t } = useTranslation();
  const [state, setState] = useState(false);

  const dataForDropdown = (() => {
    const temp = [];
    for (let i = 1; i < data.length; i += 1) {
      temp.push(data[i]);
    }
    return temp;
  })();

  const items = dataForDropdown.map((item, i) => (
    <li key={i}>
      <a href={`tel:${item.number}`}>{item.number}</a>
    </li>
  ));

  const openHideDropdown = () => {
    setState(!state);
  };

  return (
    <ScPhoneDropdown>
      <div className={state ? 'is-open' : ''}>
        <a href={`tel:${data[0].number}`}>{data[0].number}</a>

        <button type="button" onClick={openHideDropdown}>
          <ChevronIcon />
        </button>

        <ul>
          {items}
          <li>{t('Работаем без выходных с 9:00 до 21:00')}</li>
        </ul>
      </div>
    </ScPhoneDropdown>
  );
};

PhoneDropdown.propTypes = {
  data: array,
};

PhoneDropdown.defaultProps = {
  data: [
    { number: '0 800 20 97 73' },
    { number: '0 800 20 97 72' },
    { number: '0 800 20 97 71' },
  ],
};
