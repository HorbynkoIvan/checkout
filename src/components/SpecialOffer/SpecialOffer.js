import React from 'react';
import { number, string } from 'prop-types';

import Button from '../Buttons/Button';
import PriceBlock from '../PriceBlock';
import Image from '../Image';
import { TitleBlock } from '../Title';
import { SpecialOfferStyled, SubTitleStyled, RowStyled } from './styled';

export const SpecialOffer = ({
  price,
  priceOld,
  urlProduct,
  description,
  vendorCode,
}) => (
  <SpecialOfferStyled>
    <TitleBlock>Специальные предложения</TitleBlock>
    <SubTitleStyled>Успей добавить к заказу 00 : 04 : 59</SubTitleStyled>
    <RowStyled>
      <Image />
      <div className="block">
        <a href={urlProduct}>{description}</a>

        <p>{`Артикул - ${vendorCode}`}</p>
      </div>
    </RowStyled>

    <PriceBlock price={price} priceOld={priceOld} />
    <Button className="btn">Купить</Button>
  </SpecialOfferStyled>
);

SpecialOffer.propTypes = {
  price: number.isRequired,
  priceOld: number.isRequired,
  vendorCode: number.isRequired,
  urlProduct: string.isRequired,
  description: string.isRequired,
};
