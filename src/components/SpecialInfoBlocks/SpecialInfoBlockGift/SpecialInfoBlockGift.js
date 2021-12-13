import React, { useState } from 'react';
import { array, func } from 'prop-types';

import { useTranslation } from 'react-i18next';
import { ButtonAsLink } from '../../Buttons/ButtonAsLink/ButtonAsLink';

import { SpecialInfoBlockBase } from '../SpecialInfoBlockBase/SpecialInfoBlockBase';
import { ModalGiftProducts } from '../../Modals/ModalGiftProducts/ModalGiftProducts';
import { ModalBase } from '../../Modals/ModalBase/ModalBase';
import { SpecialInfoBlockGiftPromoNameSC } from './styled';

export const SpecialInfoBlockGift = ({ clickHideHandler, data }) => {
  // data = {
  //   maxGifts: 2,
  //   products: [
  //     {
  //       productUrl: '#',
  //       imgSrc: TestImg,
  //       productDescription:
  //         'Подгузники Pampers Premium Care 2 (4-8 кг), 148 шт.',
  //       vendorCode: '291881',
  //     },
  //     {
  //       productUrl: '#',
  //       imgSrc: TestImg,
  //       productDescription:
  //         'Подгузники Pampers Premium Care 2 (4-8 кг), 148 шт.',
  //       vendorCode: '291881',
  //     },
  //     {
  //       productUrl: '#',
  //       imgSrc: TestImg,
  //       productDescription:
  //         'Подгузники Pampers Premium Care 2 (4-8 кг), 148 шт.',
  //       vendorCode: '291881',
  //     },
  //   ],
  // };

  const _data = [
    {
      id: 27917,
      name: 'Подарок при покупке Philips Avent',
      description:
        '<p>Приобретайте акционный товар Philips Avent&nbsp;и получайте&nbsp;<a href="https://pampik.com/catalog/podarok-konteyner-dlya-hraneniya-grudnogo-moloka-philips-avent-1-sht-h-180-ml-scf61900" target="_blank" rel="noopener noreferrer">Контейнер для хранения грудного молока Philips Avent</a><strong>&nbsp;в подарок!*</strong></p>\r\n<h5>*подарок будет добавлен после оформления заказа</h5>\r\n<h5>**подарок предоставляется при покупке акционного товара&nbsp;</h5>',
      shortDescription:
        '<p>Приобретайте акционный товар Philips Avent и получайте <a href="https://pampik.com/catalog/podarok-konteyner-dlya-hraneniya-grudnogo-moloka-philips-avent-1-sht-h-180-ml-scf61900" target="_blank" rel="noopener noreferrer">Контейнер для хранения грудного молока Philips Avent</a><strong>&nbsp;в подарок!*</strong></p>\r\n<h5>*подарок будет добавлен после оформления заказа</h5>\r\n<h5>**подарок предоставляется при покупке акционного товара&nbsp;</h5>',
      url: 'http://pampik.local/news/podarok-pri-pokupke-philips',
      image: null,
      useCount: 0,
      gifts: [
        {
          productId: 418555,
          name:
            'Подарок. Контейнер для хранения грудного молока Philips Avent, 1 шт. х 180 мл (SCF619/00)',
          price: 0.01,
          oldPrice: 0,
          quantity: 0,
          image:
            'https://pampik.com/uploads/product/small/20210219/WCgTxBGn.png',
          url:
            'http://pampik.local/catalog/podarok-konteyner-dlya-hraneniya-grudnogo-moloka-philips-avent-1-sht-h-180-ml-scf61900',
          sku: null,
          isGift: true,
          articul: '418555',
          isPreordered: null,
        },
        {
          productId: 418555,
          name:
            'Подарок. Контейнер для хранения грудного молока Philips Avent, 1 шт. х 180 мл (SCF619/00)',
          price: 0.01,
          oldPrice: 0,
          quantity: 0,
          image:
            'https://pampik.com/uploads/product/small/20210219/WCgTxBGn.png',
          url:
            'http://pampik.local/catalog/podarok-konteyner-dlya-hraneniya-grudnogo-moloka-philips-avent-1-sht-h-180-ml-scf61900',
          sku: null,
          isGift: true,
          articul: '418555',
          isPreordered: null,
        },
      ],
      giftsCount: null,
      selectedGiftsCount: null,
    },
    {
      id: 27917,
      name: 'Подарок при покупке Philips Avent',
      description:
        '<p>Приобретайте акционный товар Philips Avent&nbsp;и получайте&nbsp;<a href="https://pampik.com/catalog/podarok-konteyner-dlya-hraneniya-grudnogo-moloka-philips-avent-1-sht-h-180-ml-scf61900" target="_blank" rel="noopener noreferrer">Контейнер для хранения грудного молока Philips Avent</a><strong>&nbsp;в подарок!*</strong></p>\r\n<h5>*подарок будет добавлен после оформления заказа</h5>\r\n<h5>**подарок предоставляется при покупке акционного товара&nbsp;</h5>',
      shortDescription:
        '<p>Приобретайте акционный товар Philips Avent и получайте <a href="https://pampik.com/catalog/podarok-konteyner-dlya-hraneniya-grudnogo-moloka-philips-avent-1-sht-h-180-ml-scf61900" target="_blank" rel="noopener noreferrer">Контейнер для хранения грудного молока Philips Avent</a><strong>&nbsp;в подарок!*</strong></p>\r\n<h5>*подарок будет добавлен после оформления заказа</h5>\r\n<h5>**подарок предоставляется при покупке акционного товара&nbsp;</h5>',
      url: 'http://pampik.local/news/podarok-pri-pokupke-philips',
      image: null,
      useCount: 0,
      gifts: [
        {
          productId: 418555,
          name:
            'Подарок. Контейнер для хранения грудного молока Philips Avent, 1 шт. х 180 мл (SCF619/00)',
          price: 0.01,
          oldPrice: 0,
          quantity: 0,
          image:
            'https://pampik.com/uploads/product/small/20210219/WCgTxBGn.png',
          url:
            'http://pampik.local/catalog/podarok-konteyner-dlya-hraneniya-grudnogo-moloka-philips-avent-1-sht-h-180-ml-scf61900',
          sku: null,
          isGift: true,
          articul: '418555',
          isPreordered: null,
        },
      ],
      giftsCount: null,
      selectedGiftsCount: null,
    },
  ];

  const [opened, setOpen] = useState(false);
  const [isOpenModalPromo, setIsOpenModalPromo] = useState(false);

  const { t } = useTranslation();
  const closeModal = () => {
    setOpen(false);
  };
  const modalPromoClickHandler = () => {
    setIsOpenModalPromo(!isOpenModalPromo);
  };
  const blockBaseTitleContent = (
    <div>
      <p>
        {t('Вы выполнили условия')}{' '}
        <ButtonAsLink onClick={modalPromoClickHandler}>
          {t('акции')}
        </ButtonAsLink>{' '}
        {t('Самое время выбрать подарки')}
      </p>
      <ButtonAsLink onClick={() => setOpen(true)}>
        {t('Выбрать подарки')}
      </ButtonAsLink>
    </div>
  );

  const promoDescription = _data.map((item, i) => <p key={i}>{item.name}</p>);
  return (
    <SpecialInfoBlockBase
      clickHideHandler={clickHideHandler}
      labelOptions={{
        present: true,
        big: true,
      }}
      title={blockBaseTitleContent}
    >
      <ModalBase
        portalClassName="modal-promotion"
        opened={isOpenModalPromo}
        title={t('Условия акции')}
        closeModal={modalPromoClickHandler}
      >
        <SpecialInfoBlockGiftPromoNameSC>
          {promoDescription}
        </SpecialInfoBlockGiftPromoNameSC>
      </ModalBase>

      <ModalGiftProducts
        // data={data}
        data={_data}
        modalWidth={704}
        opened={opened}
        closeModal={closeModal}
      />
    </SpecialInfoBlockBase>
  );
};

SpecialInfoBlockGift.propTypes = {
  data: array,
  clickHideHandler: func,
};
