import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { any } from 'prop-types';
import useDebounced from '../../../hooks/useDebounce';
import { CheckoutContext } from '../../../context';
import { RegionSelectorStyled, SelectStyled } from './styled';
import { TitleLabel } from '../../Title';
import { ServiceDict } from '../../../services/ServiceDict';
import { updateCartOnCheckout } from '../../../helpers/helpersApi';
import { Preloader } from '../../Preloader/Preloader';

export const RegionSelector = () => {
  const { t } = useTranslation();
  const {
    setFormData,
    checkoutData: { selectedCity },
    setCheckoutData,
  } = useContext(CheckoutContext);
  const [cityAPI, setCityAPI] = useState([]);
  const [cityPrepared, selectCityPrepared] = useState([]);
  const [stateCity, selectCity] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isShowPreloader, setIsShowPreloader] = useState(false);
  useEffect(() => {
    // if city not assigned take selectedCity
    if (selectedCity) {
      selectCity({
        id: selectedCity?.id,
        label: selectedCity?.title,
        value: selectedCity?.title,
      });
      setFormData({
        cityId: selectedCity?.id,
      });
      setLoading(false);
    }
  }, [selectedCity]);

  const fetchCity = async (query) => {
    try {
      setIsShowPreloader(true);
      const response = await ServiceDict.getCity(query);
      setCityAPI(response);
    } catch (e) {
      console.log('ServiceDict.getCity ', e);
    } finally {
      setIsShowPreloader(false);
    }
  };

  const debouncedFetchCity = useDebounced(fetchCity, 500);

  useEffect(() => {
    // prepare array of options
    const prepared = cityAPI.map((item, i) => ({
      id: item.id,
      value: item.title,
      label: (
        <div className="select_label" key={i}>
          {item.title}
        </div>
      ),
    }));
    selectCityPrepared(prepared);
  }, [cityAPI]);

  const onChangeHandler = async (option) => {
    setFormData({
      cityId: option.id,
    });
    // set selected option after onchange
    const citySelected = cityPrepared.find((item) => item.id === option.id);
    selectCity(citySelected);
    setLoading(true);
    // update cart
    const data = await updateCartOnCheckout({ city_id: option.id });
    return data && setCheckoutData(data);
  };

  const onInputChange = (query, { action }) => {
    // native react-select event
    if (action === 'input-change') {
      debouncedFetchCity(query);
    }
  };

  const onMenuOpenHandler = () => {
    // selectCity('');
  };

  const onBlurHandler = () => {};

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
    <RegionSelectorStyled>
      <TitleLabel>{t('Населенный пункт')}</TitleLabel>

      <SelectStyled
        // defaultMenuIsOpen
        filterOption={() => true} // disable native substring search
        name="city"
        className="select_delivery"
        classNamePrefix="select"
        isDisabled={isLoading}
        isLoading={false}
        options={cityPrepared}
        value={stateCity}
        onChange={onChangeHandler}
        onInputChange={onInputChange}
        onBlur={onBlurHandler}
        onMenuOpen={onMenuOpenHandler}
        placeholder={t('Начните вводить название населенного пункта')}
        noOptionsMessage={() => null}
        blurInputOnSelect
        autoComplete="off"
        components={{
          MenuList: CustomMenuList,
        }}
      />
    </RegionSelectorStyled>
  );
};
