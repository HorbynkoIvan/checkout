import React, { useContext, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { array } from 'prop-types';
import { ContactsListStyled } from './styled';
import BlockRadio from '../BlockRadio';
import ButtonAsLink from '../Buttons/ButtonAsLink';
import UserData from '../UserData';
import { ReactComponent as ChevronIcon } from '../../assets/img/chevron_select.svg';
import { CheckoutContext } from '../../context';

export const ContactsList = ({ contactsAPI }) => {
  const { t } = useTranslation();
  const { setFormData, deleteFormData, setErrorsData } = useContext(
    CheckoutContext
  );
  const [activeId, setActiveId] = useState('');
  const [{ itemsToShow, expanded }, setItems] = useState({
    itemsToShow: 2,
    expanded: false,
  });

  useEffect(() => {
    setFormData({ contactId: contactsAPI[0]?.id });
    setActiveId(contactsAPI[0]?.id);

    return () => {
      deleteFormData({ contactId: '' });
    };
  }, [contactsAPI]);

  const clickHandler = (e) => {
    e.stopPropagation();
    setErrorsData({
      phone: '',
      lastname: '',
      firstname: '',
      middlename: '',
      email: '',
    });
    if (e.currentTarget.id !== 'another') {
      const id = Number.parseInt(e.currentTarget.id);
      setActiveId(id);
      setFormData({ contactId: id });
    } else {
      setActiveId(e.currentTarget.id);
      // deleteFormData({ contactId: '' });
      setFormData({ contactId: '' });
    }
  };

  const showMore = () =>
    itemsToShow === 2
      ? setItems({ itemsToShow: contactsAPI.length, expanded: true })
      : setItems({ itemsToShow: 2, expanded: false });

  const showAddressList = () =>
    contactsAPI
      .slice(0, itemsToShow)
      .map(({ id, name, phone_mobile, email }) => (
        <BlockRadio
          key={id}
          id={id}
          title={name}
          clickHandler={clickHandler}
          isActive={id === activeId}
          className="address_template"
        >
          <p className="phone">{phone_mobile}</p>
          <p className="email">{email}</p>
        </BlockRadio>
      ));

  return (
    <ContactsListStyled>
      {showAddressList()}

      {contactsAPI.length > 2 ? (
        <ButtonAsLink
          className={`showMore ${expanded && 'active'}`}
          icon={<ChevronIcon />}
          onClick={showMore}
        >
          {expanded ? t('Скрыть') : t('Показать все')}
        </ButtonAsLink>
      ) : null}

      {contactsAPI.length ? (
        <BlockRadio
          id="another"
          title={t('Другой получатель')}
          clickHandler={clickHandler}
          isActive={activeId === 'another'}
          className="another"
        />
      ) : null}

      {activeId === 'another' && <UserData />}
    </ContactsListStyled>
  );
};

ContactsList.propTypes = {
  contactsAPI: array,
};
