import React, { useState } from 'react';
import { any, array, func } from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  ScSpecialInfoDropdownContent,
  ScSpecialInfoDropdownControls,
  ScSpecialInfoDropdownWrapper,
  SpecialInfoBlockSimilarProductsModalTitleSC,
} from './styled';
import { ButtonAsLink } from '../../Buttons/ButtonAsLink/ButtonAsLink';
import { ReactComponent as ChevronIcon } from '../../assets/img/chevron.svg';

import { ModalSimilarProducts } from '../../Modals/ModalSimilarProducts/ModalSimilarProducts';
import { SpecialInfoBlockBase } from '../SpecialInfoBlockBase/SpecialInfoBlockBase';

export const SpecialInfoBlockSimilarProducts = ({
  labelOptions,
  clickHideHandler,
  dropdown,
}) => {
  const { t } = useTranslation();
  const [state, setState] = useState({
    isDropdownOpen: false,
    modal: { isOpen: false, data: [] },
  });
  const dropdownBtnHandler = () => {
    setState({ ...state, isDropdownOpen: !state.isDropdownOpen });
  };
  const replaceProductHandler = (item) => {
    setState({
      ...state,
      modal: {
        ...state.modal,
        isOpen: true,
        data: item.similarProducts,
      },
    });
  };
  const blockBaseTitleContent = (
    <SpecialInfoBlockSimilarProductsModalTitleSC>
      <p>
        {t(
          'Похоже кто-то вас опередил. Некоторые товары из вашей корзины раскуплены!'
        )}
      </p>

      {dropdown && !state.isDropdownOpen && (
        <ButtonAsLink icon={<ChevronIcon />} onClick={dropdownBtnHandler}>
          {t('Какие товары раскуплены?')}
        </ButtonAsLink>
      )}
    </SpecialInfoBlockSimilarProductsModalTitleSC>
  );
  return (
    <SpecialInfoBlockBase
      clickHideHandler={clickHideHandler}
      labelOptions={labelOptions}
      title={blockBaseTitleContent}
    >
      {dropdown && state.isDropdownOpen && (
        <ScSpecialInfoDropdownWrapper>
          <ModalSimilarProducts
            data={state.modal.data}
            opened={state.modal.isOpen}
            modalWidth={704}
            closeModal={() => {
              setState({
                ...state,
                modal: {
                  ...state.modal,
                  isOpen: false,
                },
              });
            }}
          />

          <ScSpecialInfoDropdownContent>
            {dropdown.map((item, i) => (
              <section key={i}>
                <div>
                  <a href={item.url}>
                    <img src={item.image} alt={`product-${i}`} />
                  </a>

                  <div>
                    <a href={item.url}>{item.name}</a>

                    <p>Артикул {item.productId}</p>
                  </div>
                </div>
                {!!item.similarProducts.length && (
                  <ButtonAsLink onClick={() => replaceProductHandler(item)}>
                    {t('Подобрать замену')}
                  </ButtonAsLink>
                )}
              </section>
            ))}
          </ScSpecialInfoDropdownContent>

          <ScSpecialInfoDropdownControls>
            <ButtonAsLink icon={<ChevronIcon />} onClick={dropdownBtnHandler}>
              {t('Скрыть')}
            </ButtonAsLink>
          </ScSpecialInfoDropdownControls>
        </ScSpecialInfoDropdownWrapper>
      )}
    </SpecialInfoBlockBase>
  );
};

SpecialInfoBlockSimilarProducts.propTypes = {
  dropdown: array,
  labelOptions: any,
  clickHideHandler: func,
};
