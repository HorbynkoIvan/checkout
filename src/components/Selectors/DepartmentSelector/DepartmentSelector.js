import React, { useState, useContext, useEffect, useRef } from 'react';

import { useTranslation } from 'react-i18next';
import { any } from 'prop-types';
import useDebounced from '../../../hooks/useDebounce';
import { DepartmentSelectorStyled, SelectStyled } from './styled';
import { InputErrorSC } from '../../../pages/checkout/src/styled';
import { TitleLabel } from '../../Title';
import { CheckoutContext } from '../../../context';
import { validationCheckout } from '../../../validation/validationCheckout';
import { ServiceDict } from '../../../services/ServiceDict';
import { setMaxLength } from '../../../helpers/helpers';
import { Preloader } from '../../Preloader/Preloader';

// const warhousesMock = [
//   {
//     id: 1,
//     title: 'Відділення №122 (до 5 кг): бульв. Вацлава Гавела, 50',
//     disabled: true,
//   },
//   {
//     id: 2,
//     title:
//       'Поштомат "Нова Пошта" №8666: вул. Бульварно-кудрявська, 36, під\'їзд №2 (ТІЛЬКИ ДЛЯ МЕШКАНЦІВ)',
//     disabled: false,
//   },
//   {
//     id: 3,
//     title: 'Відділення №123 (до 30 кг): вул. Градинська, 7',
//     disabled: true,
//   },
//   {
//     id: 4,
//     title: 'Відділення №123 (до 30 кг): вул. Градинська, 7',
//     disabled: true,
//   },
//   {
//     id: 5,
//     title: 'Відділення №123 (до 30 кг): вул. Градинська, 7',
//     disabled: true,
//   },
//   {
//     id: 6,
//     title: 'Відділення №122 (до 5 кг): бульв. Вацлава Гавела, 50',
//     disabled: true,
//   },
// ];

// const departments = data.departmentsList.map((item, i) => ({
//   id: item.id,
//   value: item.value,
//   label: (
//     <div className="select_label" key={i}>
//       {item.value}
//     </div>
//   ),
// }));

export const DepartmentSelector = () => {
  const { t } = useTranslation();
  const departmentRef = useRef();
  const {
    setFormData,
    deleteFormData,
    errorsData,
    setErrorsData,
    formData: { deliveryMethod, cityId },
  } = useContext(CheckoutContext);

  const [departmentsAPI, setDepartmentsAPI] = useState([]);
  const [departmentsPrepared, setDepartmentsPrepared] = useState([]);
  const [department, selectDepartment] = useState('');
  const [isShowPreloader, setIsShowPreloader] = useState(false);
  useEffect(() => {
    setFormData({ department: '' });
    // set initial states after city change
    selectDepartment('');
    setDepartmentsPrepared([]);
    // set initial states after city change
    return () => {
      setErrorsData({ department: '' });
      deleteFormData({ department: '' });
    };
  }, [cityId, deliveryMethod]);

  const fetchDepartments = async (query) => {
    try {
      setIsShowPreloader(true);
      const response = await ServiceDict.getDepartments(
        cityId,
        deliveryMethod,
        query
      );

      setDepartmentsAPI(response);
    } catch (e) {
      console.log('ServiceDict.getDepartments ', e);
    } finally {
      setIsShowPreloader(false);
    }
  };

  const debouncedFetchDepartments = useDebounced(fetchDepartments, 500);

  useEffect(() => {
    // prepare array of options
    const prepared = departmentsAPI.map((item, i) => ({
      id: item.id,
      value: item.title,
      disabled: item.disabled,
      label: (
        <div className="select_label" key={i}>
          {item.title}
        </div>
      ),
    }));
    setDepartmentsPrepared(prepared);
  }, [departmentsAPI]);

  const onChangeHandler = (option) => {
    console.log('onChangeHandler', option);
    setErrorsData({ department: '' }); // clean error after onchange
    setFormData({ department: option.id });

    const departmentsSelected = departmentsPrepared.find(
      (item) => item.id === option.id
    );
    selectDepartment(departmentsSelected);
  };

  const onInputChange = (query, { action }) => {
    // react-select doesnt has prop maxLength
    const maxLength = 255;
    const queryWithMaxLength = setMaxLength(query, maxLength);
    // react-select doesnt has prop maxLength

    // native react-select
    if (action === 'input-change') {
      setErrorsData({ department: '' }); // clean error after onchange
      debouncedFetchDepartments(queryWithMaxLength);
    }

    if (action === 'set-value') {
      // select value from dropdown
      // console.log('set-value', department);
    }

    if (action === 'input-blur') {
      console.log('input-blur', department);
    }
  };

  const onMenuOpenHandler = () => {
    selectDepartment('');
  };

  // trick for rect-select, the issue is - onblure triggered earlier than onchane
  // in that moment cant take state setCounter in onBlurHandler help to do that
  // start
  const [increment, setIncrement] = useState(0);

  useEffect(() => {
    if (!increment) return;
    setErrorsData(
      validationCheckout({
        department,
      })
    );
  }, [increment]);

  const onBlurHandler = () => {
    setTimeout(() => {
      setIncrement((prev) => prev + 1);
    }, 0);
  };
  // end

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
    <DepartmentSelectorStyled>
      <TitleLabel>{t('Номер')}</TitleLabel>
      <SelectStyled
        // defaultMenuIsOpen
        ref={departmentRef}
        name="department"
        className="select_delivery"
        classNamePrefix="select"
        isDisabled={false}
        isLoading={false}
        isSearchable
        options={departmentsPrepared}
        isOptionDisabled={(option) => option.disabled}
        onChange={onChangeHandler}
        onInputChange={onInputChange}
        onBlur={onBlurHandler}
        onMenuOpen={onMenuOpenHandler}
        value={department}
        placeholder={t('Введите номер отделения')}
        error={errorsData.department || null}
        noOptionsMessage={() => t('Ничего не найдено')}
        components={{
          MenuList: CustomMenuList,
        }}
      />
      {errorsData.department && (
        <InputErrorSC>
          {errorsData.department.empty && t('Заполните поле')}
        </InputErrorSC>
      )}
    </DepartmentSelectorStyled>
  );
};
