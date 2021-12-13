import React, { useContext, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { any, bool } from 'prop-types';
import { InputErrorSC } from '../../pages/checkout/src/styled';
import { RowSC } from './styled';
import Input from '../Inputs/Input';
import { CheckoutContext } from '../../context';
import { validationCheckout } from '../../validation/validationCheckout';
import Checkbox from '../Checkbox';

export const AddressHouseFields = ({
  house,
  entrance,
  floor,
  flat,
  privateHouse,
  disable,
}) => {
  const { t } = useTranslation();
  const {
    formData,
    setFormData,
    deleteFormData,
    errorsData,
    setErrorsData,
  } = useContext(CheckoutContext);

  useEffect(() => {
    setFormData({
      house,
      entrance,
      floor,
      flat,
      privateHouse,
    });
    return () => {
      setErrorsData({
        house: '',
        entrance: '',
        floor: '',
        flat: '',
      });

      deleteFormData({
        house: '',
        entrance: '',
        floor: '',
        flat: '',
      });
    };
  }, []);

  useEffect(() => {
    if (formData.privateHouse) {
      setErrorsData({
        entrance: '',
        floor: '',
        flat: '',
      });
      setFormData({
        entrance: '',
        floor: '',
        flat: '',
      });

      // ToDo remove setTimeout in future
      // deleteFormData should be fulfilled after setFormData - this is necessary to clear fields
      setTimeout(() => {
        deleteFormData({
          entrance: '',
          floor: '',
          flat: '',
        });
      });
    }
  }, [formData.privateHouse]);

  const onChangeHandler = ({ target }) => {
    const re = /^[0-9]+[а-яА-ЯёЁіІїЇєЄґҐюЮ\-\/0-9]*$/u;
    if (target.value === '' || re.test(target.value)) {
      setErrorsData({ [target.name]: '' }); // clean error after onchange
      return setFormData({
        [target.name]: target.value,
      });
    }
  };

  const onChangeNumberHandler = ({ target }) => {
    // allow only numbers in inputs
    const re = /^[0-9\b]+$/;
    if (target.value === '' || re.test(target.value)) {
      setErrorsData({ [target.name]: '' }); // clean error after onchange
      return setFormData({
        [target.name]: target.value,
      });
    }
  };

  const onBlurHandler = ({ target }) => {
    setErrorsData(validationCheckout({ [target.name]: target.value }));
  };

  const onChangePrivatHouse = () => {
    setFormData({ privateHouse: !formData.privateHouse });
    // for correct working validation after checkbox change
    if (formData.privateHouse) {
      setFormData({
        house: formData.house || '',
        entrance: formData.entrance || '',
        floor: formData.floor || '',
        flat: formData.flat || '',
      });
    }
  };

  return (
    <div>
      <RowSC>
        <div className="input_house">
          <Input
            label={t('Дом')}
            type="text"
            id="house"
            name="house"
            placeholder=""
            value={formData.house}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            error={errorsData.house || null}
            maxLength={5}
            disable={disable}
          />
        </div>

        <div className="input_entrance">
          <Input
            label={t('Подъезд')}
            type="text"
            id="entrance"
            name="entrance"
            placeholder=""
            maxLength={2}
            value={formData.entrance}
            onChange={onChangeNumberHandler}
            onBlur={onBlurHandler}
            error={errorsData.entrance || null}
          />
        </div>

        <div className="input_floor">
          <Input
            label={t('Этаж')}
            type="text"
            id="floor"
            name="floor"
            placeholder=""
            value={formData.floor}
            onChange={onChangeNumberHandler}
            onBlur={onBlurHandler}
            error={errorsData.floor || null}
            maxLength={2}
          />
        </div>

        <div className="input_flat">
          <Input
            label={t('Квартира')}
            type="text"
            id="flat"
            name="flat"
            placeholder=""
            value={formData.flat}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            error={errorsData.flat || null}
            maxLength={5}
            disable={disable}
          />
        </div>
      </RowSC>

      {[
        errorsData.house,
        errorsData.entrance,
        errorsData.floor,
        errorsData.flat,
      ].some((item) => item.hasOwnProperty('empty')) && (
        <InputErrorSC>
          {t('Пожалуйста, введите корректные данные')}
        </InputErrorSC>
      )}

      {!disable && (
        <Checkbox
          className="checkbox"
          name="privateHouse"
          onChange={onChangePrivatHouse}
          checked={formData.privateHouse}
        >
          {t('Частный дом')}
        </Checkbox>
      )}
    </div>
  );
};

AddressHouseFields.propTypes = {
  house: any,
  entrance: any,
  floor: any,
  flat: any,
  privateHouse: bool,
};
