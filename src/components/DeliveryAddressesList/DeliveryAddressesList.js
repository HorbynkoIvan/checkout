import React, { useContext, useState, useEffect } from 'react';

import { array } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { DeliveryAddressesListSC } from './styled';
import BlockRadio from '../BlockRadio';
import ButtonAsLink from '../Buttons/ButtonAsLink';
import DeliveryMethod from '../DeliveryMethod';
import DeliveryTime from '../DeliveryTime';
import { ReactComponent as ChevronIcon } from '../../assets/img/chevron_select.svg';
import { CheckoutContext } from '../../context';
import { COURIER_SERVICE_ID, DELIVERY_TO_DEPARTMENT } from '../../constants';
import SpecialInfoBlockShipping from '../SpecialInfoBlocks/SpecialInfoBlockShipping';
import { updateCartOnCheckout } from '../../helpers/helpersApi';
import { AddressHouseFields } from '../AddressHouseFields/AddressHouseFields';

// const data = [
//   {
//     id: '1',
//     typeTitle: 'Курьер (Pampik)',
//     title: 'Киев, Отделение №2: ул. Бережанская, 9 (Оболонь Луговая)',
//     value: 'Курьер (Pampik)',
//     deliveryCostTitle: 'Доставим в течение 24 часов. Стоимость - бесплатно',
//   },
//   {
//     id: '2',
//     typeTitle: 'Экспресс-доставка (iPOST)',
//     title: 'Киев, ул. Тираспольская, 60, кв.124',
//     value: 'Экспресс-доставка (iPOST)',
//     deliveryCostTitle: 'За 3 часа по Киеву. Стоимость - 190',
//   },
//   {
//     id: '3',
//     typeTitle: 'Отделение (Новая почта)',
//     title: 'Киев, Отделение №2: ул. Бережанская, 9 (Оболонь Луговая)',
//     value: 'Отделение (Новая почта)',
//     deliveryCostTitle: 'Отправим в течение 12 часов. Стоимость - бесплатно',
//   },
//   {
//     id: '4',
//     typeTitle: 'Отделение (Укрпочта)',
//     title: 'Киев, ул. Тираспольская, 60, кв.124',
//     value: 'Отделение (Укрпочта)',
//     deliveryCostTitle: 'Доставим в течение 24 часов. Стоимость - бесплатно',
//   },
// ];

export const DeliveryAddressesList = ({ addressesAPI }) => {
  const { t, i18n } = useTranslation();
  const {
    formData,
    setFormData,
    setCheckoutData,
    deleteFormData,
    setErrorsData,
    checkoutData: { amountForFreeShipping, hasPreorderedProducts },
  } = useContext(CheckoutContext);
  const [activeId, setActiveId] = useState('');
  const [{ itemsToShow, expanded }, setItems] = useState({
    itemsToShow: 2,
    expanded: false,
  });

  useEffect(() => {
    setFormData({ addressId: addressesAPI[0]?.id });
    setActiveId(addressesAPI[0]?.id);
    return () => {
      deleteFormData({ addressId: '' });
    };
  }, []);

  const clickHandler = async (e) => {
    e.stopPropagation();
    setErrorsData({ street: '', house: '', entrance: '', floor: '', flat: '' });

    if (e.currentTarget.id !== 'another') {
      const id = Number.parseInt(e.currentTarget.id);
      setActiveId(id);
      setFormData({ addressId: id });

      // update cart
      const data = await updateCartOnCheckout({ address_id: id });
      return data && setCheckoutData(data);
    }
    setActiveId(e.currentTarget.id);
    // deleteFormData({ addressId: '' });
    setFormData({ addressId: '' });
  };

  const showMore = () =>
    itemsToShow === 2
      ? setItems({ itemsToShow: addressesAPI.length, expanded: true })
      : setItems({ itemsToShow: 2, expanded: false });

  const showAddressHouseFields = (addressData) => {
    // show address fields if not privatHouse
    // and any of fields(entrance, flat, floor) empty, floor ca be equal =0
    const { entrance, floor, flat, privateHouse } = addressData;
    const isShow =
      !privateHouse && (!entrance || !flat || (!floor && floor !== 0));
    if (isShow) return <AddressHouseFields {...addressData} disable />;
  };

  const showAddressList = () =>
    addressesAPI
      .slice(0, itemsToShow)
      .map(
        ({
          id,
          typeTitle,
          title,
          deliveryCostTitle,
          deliveryMethod,
          deliveryMethodType,
          ...addressData
        }) => (
          <div key={id}>
            <BlockRadio
              id={id}
              title={typeTitle}
              clickHandler={clickHandler}
              isActive={id === activeId}
              className="delivery_template"
            >
              <p className="location">{title}</p>
              <p className="info">{deliveryCostTitle}</p>
            </BlockRadio>
            {id === activeId &&
              deliveryMethodType !== 'department' &&
              showAddressHouseFields(addressData)}

            {id === activeId && amountForFreeShipping > 0 && (
              <SpecialInfoBlockShipping
                amountForFreeShipping={amountForFreeShipping}
                linkUrl={i18n.language === 'ru-RU' ? '/' : '/ua'}
                simpleBlock // remove delete button and add some additional style, using on checkout
              />
            )}
            {id === activeId &&
              deliveryMethod === COURIER_SERVICE_ID &&
              !hasPreorderedProducts && <DeliveryTime />}
          </div>
        )
      );

  return (
    <DeliveryAddressesListSC>
      {showAddressList()}
      {addressesAPI.length > 2 ? (
        <ButtonAsLink
          className={`showMore ${expanded && 'active'}`}
          icon={<ChevronIcon />}
          onClick={showMore}
        >
          {expanded ? t('Скрыть') : t('Показать все')}
        </ButtonAsLink>
      ) : null}
      <BlockRadio
        id="another"
        title={t('Другой способ доставки')}
        clickHandler={clickHandler}
        isActive={activeId === 'another'}
        className="another"
      />
      {activeId === 'another' && <DeliveryMethod />}
    </DeliveryAddressesListSC>
  );
};

DeliveryAddressesList.propTypes = {
  addressesAPI: array,
};
