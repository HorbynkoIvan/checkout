import React, { useContext, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { TimeSelectorStyled, SelectStyled } from './styled';
import { TitleLabel } from '../../Title';
import { CheckoutContext } from '../../../context';
import { COURIER_SERVICE_ID } from '../../../constants';

// const deliveryMethodsAPIMock = [
//   {
//     id: 0,
//     title: 'Курьерская доставка',
//     description: 'Отправим 23.04.2021. Стоимость - 0',
//     deliveryMethodType: 'department',
//     logoUrl: '/themes/redesign../../assets/img/deliveriesLogos/pampik.svg',
//     deliveryDates: {
//       firstDeliveryDate: 1623412800,
//       dateList: {
//         '2021-06-11': 'Завтра',
//       },
//       timeList: {
//         '09-15': {
//           value: '09-15',
//           disabled: '',
//           text: '09:00 - 15:00',
//         },
//         '15-21': {
//           value: '15-21',
//           disabled: '',
//           text: '15:00 - 21:00',
//         },
//       },
//     },
//   },
// ];

export const TimeSelector = () => {
  const { t } = useTranslation();
  const {
    checkoutData: { deliveryMethodsAPI, timeListAPI },
    formData: { startDate },
    setFormData,
    setCheckoutData,
  } = useContext(CheckoutContext);

  const [rangesPrepared, setRangesPrepared] = useState([]);
  const [timeRangeSelected, selectTimeRange] = useState(null);

  useEffect(() => {
    // prepare timeListAPI according deliveryMethodsAPI
    const courierServiceMethod = deliveryMethodsAPI.find(
      (item) => item.id === COURIER_SERVICE_ID
    );
    if (
      courierServiceMethod &&
      Object.keys(courierServiceMethod.deliveryDates).length
    ) {
      setCheckoutData({
        timeListAPI: courierServiceMethod.deliveryDates.timeList,
      });
    }
  }, [deliveryMethodsAPI]);

  useEffect(() => {
    // prepare options and set initial
    if (timeListAPI) {
      const timeList = Object.values(timeListAPI).map((item) => ({
        value: item.value,
        label: item.text,
        disabled: item.disabled,
      }));
      setRangesPrepared(timeList);

      if (timeList.length > 0) {
        const initialSelectedTimeRange = timeList.find(
          (item) => !item.disabled
        );

        selectTimeRange(initialSelectedTimeRange); // set initial option
      }
    }
  }, [timeListAPI]);

  useEffect(() => {
    // prepare field date_delivery_customer for sending to back
    if (timeRangeSelected) {
      const startDateFormated = moment(startDate).format('YYYY-MM-DD');
      const timeRangeFormated = `${timeRangeSelected.value.replace(
        '-',
        ':'
      )}:00`;

      setFormData({
        date_delivery_customer: `${startDateFormated} ${timeRangeFormated}`,
      });
    }
  }, [timeRangeSelected]);

  const handleChange = (option) => {
    selectTimeRange(option);
  };

  const optionDisabledHandler = (option) => option.disabled;

  return (
    <TimeSelectorStyled>
      <TitleLabel>{t('Время')}</TitleLabel>

      <SelectStyled
        className="select_time"
        classNamePrefix="select"
        isDisabled={false}
        isLoading={false}
        isSearchable={false}
        options={rangesPrepared}
        isOptionDisabled={optionDisabledHandler}
        value={timeRangeSelected}
        onChange={handleChange}
      />
    </TimeSelectorStyled>
  );
};
