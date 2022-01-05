import React, { useContext, useEffect, useRef, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { any } from 'prop-types';
import useDebounced from '../../../hooks/useDebounce';
import { StreetSelectorStyled, SelectStyled } from './styled';
import { TitleLabel } from '../../Title';
import { CheckoutContext } from '../../../context';
import { validationCheckout } from '../../../validation/validationCheckout';
import { InputErrorSC } from '../../../pages/checkout/styled';
import { ServiceDict } from '../../../services/ServiceDict';
import { setMaxLength } from '../../../helpers/helpers';
import { Preloader } from '../../Preloader/Preloader';

// const streetsMock = [
//   {
//     id: 1,
//     title: 'Хрещатик',
//   },
//   {
//     id: 2,
//     title: 'Прорізна',
//   },
//   {
//     id: 3,
//     title: 'Козирна',
//   },
//   {
//     id: 4,
//     title: 'Ленона',
//   },
//   {
//     id: 5,
//     title: 'Вишгородська',
//   },
//   {
//     id: 6,
//     title: 'Павла Зіброва',
//   },
// ];

// const streets = data.streetsList.map((item, i) => ({
//   id: item.id,
//   value: item.value,
//   label: (
//     <div className="select_label" key={i}>
//       {item.value}
//     </div>
//   ),
// }));

export const StreetSelector = () => {
  const { t } = useTranslation();
  const streetRef = useRef();
  const {
    formData,
    setFormData,
    deleteFormData,
    errorsData,
    setErrorsData,
  } = useContext(CheckoutContext);
  const [streetsAPI, setStreetsAPI] = useState([]);
  const [streetsPrepared, setStreetsPrepared] = useState([]);
  const [street, selectStreet] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isShowPreloader, setIsShowPreloader] = useState(false);

  useEffect(() => {
    setFormData({
      street: '',
    });
    // set initial states after city change
    selectStreet('');
    setStreetsPrepared([]);
    setInputValue('');
    // set initial states after city change
    return () => {
      setErrorsData({ street: '' });
      deleteFormData({ street: '' });
    };
  }, [formData.cityId]);

  const fetchStreets = async (query) => {
    try {
      setIsShowPreloader(true);
      const response = await ServiceDict.getStreets(query, formData.cityId);
      setStreetsAPI(response);
      // setStreetsAPI(streetsMock);
    } catch (e) {
      console.log('ServiceDict.getStreets ', e);
    } finally {
      setIsShowPreloader(false);
    }
  };

  const debouncedFetchStreets = useDebounced(fetchStreets, 500);

  useEffect(() => {
    // prepare array of options
    const prepared = streetsAPI.map((item, i) => ({
      id: item.id,
      value: item.title,
      label: (
        <div className="select_label" key={i}>
          {item.title}
        </div>
      ),
    }));
    setStreetsPrepared(prepared);
  }, [streetsAPI]);

  useEffect(() => {
    // set selected option
    if (formData.street) {
      const streetSelected = streetsPrepared.find(
        (item) => item.id === formData.street.id
      );
      // option selected from dropdown
      if (streetSelected) {
        selectStreet(streetSelected);
      }
      // option selected from input
      if (!streetSelected && formData.street.title) {
        selectStreet(formData.street);
      }
    }
  }, [formData.street]);

  const onChangeHandler = (selected) => {
    setInputValue('');
    setErrorsData({ street: '' }); // clean error after onchange
    setFormData({
      street: {
        id: selected.id,
        title: selected.value,
      },
    });
  };

  const onInputChange = (query, { action }) => {
    // react-select doesnt has prop maxLength
    const maxLength = 255;
    const queryWithMaxLength = setMaxLength(query, maxLength);
    // react-select doesnt has prop maxLength

    // native react-select event
    if (action === 'input-change') {
      if (query.length === 0) {
        // clean inputs after backspace
        setFormData({
          street: '',
        });
        selectStreet('');
        setInputValue('');
      } else {
        setInputValue(queryWithMaxLength);
        setErrorsData({ street: '' }); // clean error after onchange
        setFormData({
          street: {
            id: null,
            title: queryWithMaxLength,
          },
        });
        debouncedFetchStreets(queryWithMaxLength); // getStreets
      }
    }
  };

  // trick for rect-select, the issue is - onblure triggered earlier than onchane
  // in that moment cant take state setCounter in onBlurHandler help to do that
  // start
  const [increment, setIncrement] = useState(0);

  useEffect(() => {
    if (!increment) return;
    setErrorsData(
      validationCheckout({
        street,
      })
    );
  }, [increment]);

  const onBlurHandler = () => {
    setTimeout(() => {
      setIncrement((prev) => prev + 1);
    }, 0);
  };
  // end

  // const onBlurHandler = ({ target }) => {
  //   console.log('onBlurHandler', target.value);
  //   if (!formData.street.title) {
  //     setErrorsData(
  //       validationCheckout({
  //         street: target.value,
  //       })
  //     );
  //   }
  // };

  const CustomMenuList = ({ children }) => (
    <div className="select__menu-list">
      {isShowPreloader && <Preloader />}
      {children}
    </div>
  );

  CustomMenuList.propTypes = {
    children: any,
  };

  return (
    <StreetSelectorStyled>
      <TitleLabel>{t('Улица')}</TitleLabel>
      <SelectStyled
        // defaultMenuIsOpen
        filterOption={() => true} // disable native substring search
        ref={streetRef}
        name="street"
        className="select_delivery"
        classNamePrefix="select"
        isDisabled={false}
        isLoading={false}
        options={streetsPrepared}
        value={street}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        inputValue={inputValue}
        onInputChange={onInputChange} // the function to handle our search input
        placeholder={t('Начните вводить название улицы')}
        error={errorsData.street || null}
        noOptionsMessage={() => t('Ничего не найдено')}
        autoComplete="off"
        components={{
          MenuList: CustomMenuList,
        }}
      />

      {errorsData.street && (
        <InputErrorSC>
          {errorsData.street.empty && t('Заполните поле')}
        </InputErrorSC>
      )}
    </StreetSelectorStyled>
  );
};
