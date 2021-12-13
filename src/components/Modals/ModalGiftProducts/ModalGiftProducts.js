import React, { useState } from 'react';
import { bool, func, number, array } from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  ModalGiftProductsCheckboxIconSC,
  ModalGiftProductsFooterSC,
  ModalGiftProductsItemSC,
  ModalGiftProductsItemDescriptionSC,
} from './styled';

import { Button } from '../../Buttons/Button/Button';
import { ModalBase } from '../ModalBase/ModalBase';

export const ModalGiftProducts = ({ closeModal, opened, modalWidth, data }) => {
  const [giftSets, setGiftSets] = useState([]);
  const { t } = useTranslation();
  const clickHandlerChooseItem = (key) => {
    if (giftSets.includes(key)) {
      setGiftSets(giftSets.filter((item) => item !== key));
    } else if (giftSets.length < data.maxGifts) {
      setGiftSets([...giftSets, key]);
    }
  };

  const items = data.map((item) =>
    item.gifts.map((gift, k) => (
      <ModalGiftProductsItemSC key={k}>
        <section>
          <a href={gift.url}>
            <img src={gift.image} alt={`product-${k}`} />
          </a>

          <ModalGiftProductsItemDescriptionSC $isActive={giftSets.includes(k)}>
            <a href={gift.url}>{gift.name}</a>

            <a href={gift.url}>
              {t('Артикул')} - {gift.productId}
            </a>
          </ModalGiftProductsItemDescriptionSC>
        </section>

        <ModalGiftProductsCheckboxIconSC
          onClick={() => clickHandlerChooseItem(k)}
          $isActive={giftSets.includes(k)}
        />
      </ModalGiftProductsItemSC>
    ))
  );

  // const items = data.products.map((item, i) => (
  //   <ModalGiftProductsItemSC key={i}>
  //     <section>
  //       <a href={item.productUrl}>
  //         <img src={item.imgSrc} alt={`product-${i}`} />
  //       </a>
  //
  //       <ModalGiftProductsItemDescriptionSC $isActive={giftSets.includes(i)}>
  //         <a href={item.productUrl}>{item.productDescription}</a>
  //
  //         <a href={item.productUrl}>
  //           {t('Артикул')} - {item.vendorCode}
  //         </a>
  //       </ModalGiftProductsItemDescriptionSC>
  //     </section>
  //
  //     <ModalGiftProductsCheckboxIconSC
  //       onClick={() => clickHandlerChooseItem(i)}
  //       $isActive={giftSets.includes(i)}
  //     />
  //   </ModalGiftProductsItemSC>
  // ));

  const footerComponent = (
    <ModalGiftProductsFooterSC>
      <span>
        {giftSets.length > 0
          ? `${t('Выбрано')} ${giftSets.length} ${t('из')} ${data.maxGifts} ${t(
              'подарков'
            )}`
          : t('Подарки пока не выбраны')}
      </span>
      <Button
        disabled={giftSets.length === 0}
        onClick={() => console.log('Добавить')}
        md
      >
        Добавить
      </Button>
    </ModalGiftProductsFooterSC>
  );

  return (
    <ModalBase
      portalClassName="modal-gift-product"
      modalWidth={modalWidth}
      opened={opened}
      title={t('Выбрать подарок')}
      subTitle={`${t('Выберите')} ${data.maxGifts} ${t('подарок', {
        count: data.maxGifts,
      })}`}
      closeModal={closeModal}
      footerContent={footerComponent}
    >
      {items}
    </ModalBase>
  );
};

ModalGiftProducts.propTypes = {
  opened: bool.isRequired,
  closeModal: func.isRequired,
  modalWidth: number.isRequired,
  data: array,
};
