import React, { useContext, useEffect, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ru, uk } from 'date-fns/locale';

import { useTranslation } from 'react-i18next';
import {
  DatepickerSelectorStyled,
  DatePickerWrapper,
  ChevronStyled,
} from './styled';
import { TitleLabel } from '../../Title';
import { CheckoutContext } from '../../../context';
import { COURIER_SERVICE_ID } from '../../../constants';
import { ServiceDict } from '../../../services/ServiceDict';
import { formatDate } from '../../../helpers/helpers';

registerLocale('ru', ru);
registerLocale('uk', uk);

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
//         '2021-06-23': 'Завтра',
//         '2021-06-24': 'Завтра1',
//         '2021-06-25': 'Завтра2',
//         '2021-06-26': 'Завтра4',
//         '2021-06-27': 'Завтра5',
//         '2021-06-28': 'Завтра6',
//         '2021-06-29': 'Завтра7',
//         '2021-06-30': 'Завтра8',
//         '2021-07-01': 'Завтра9',
//         '2021-07-02': 'Завтра10',
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

export const DatepickerSelector = () => {
  const { t, i18n } = useTranslation();
  const {
    checkoutData: { deliveryMethodsAPI },
    setFormData,
    setCheckoutData,
  } = useContext(CheckoutContext);

  const [startDate, setStartDate] = useState(new Date());
  const [isOpenPicker, openPicker] = useState(false);
  const [dateListPrepared, setDateListPrepared] = useState([]);

  useEffect(() => {
    // const courierServiceMethod = deliveryMethodsAPIMock.find(
    //   (item) => item.id === COURIER_SERVICE_ID
    // );

    const courierServiceMethod = deliveryMethodsAPI.find(
      (item) => item.id === COURIER_SERVICE_ID
    );

    if (
      courierServiceMethod &&
      Object.keys(courierServiceMethod.deliveryDates).length > 0
    ) {
      const dateList = Object.keys(
        courierServiceMethod.deliveryDates?.dateList
      ).map((item) => new Date(item));

      setDateListPrepared(dateList);

      if (dateList.length > 0) {
        setStartDate(new Date(dateList[0]));
        setFormData({ startDate: dateList[0] });
      }
    } else {
      setFormData({ startDate });
    }
  }, [deliveryMethodsAPI]);

  const handleChange = async (date) => {
    setStartDate(date);
    setFormData({ startDate: date });
    try {
      const dateFormat = formatDate(date);
      const { result } = await ServiceDict.getDeliveryTimeStep(dateFormat);
      setCheckoutData({ timeListAPI: result });
      openPicker(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <DatepickerSelectorStyled>
      <TitleLabel>{t('Дата')}</TitleLabel>
      <DatePickerWrapper>
        <ChevronStyled className={isOpenPicker && 'active'} />
        <DatePicker
          dateFormat="yyyy-MM-dd"
          open={isOpenPicker}
          selected={startDate}
          includeDates={dateListPrepared}
          onChange={handleChange}
          onFocus={() => openPicker(true)}
          onBlur={() => openPicker(false)}
          onClickOutside={() => openPicker(false)}
          className="select_date"
          locale={i18n.language === 'ru-RU' ? ru : uk}
        />
      </DatePickerWrapper>
    </DatepickerSelectorStyled>
  );
};
