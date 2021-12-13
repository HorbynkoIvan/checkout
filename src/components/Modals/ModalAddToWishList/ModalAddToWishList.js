import React, { useContext, useState } from 'react';
import { bool, func, number } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { ModalAddToWishListItemSC, ModalAddToWishListSC } from './styled';
import { ModalBase } from '../ModalBase/ModalBase';
import { Button } from '../../Buttons/Button/Button';
import { ServiceCustomer } from '../../../services/ServiceCustomer';
import { CartContext } from '../../../context';
import { ServiceCart } from '../../../services/ServiceCart';
import { Input } from '../../Inputs/Input/Input';
import { Preloader } from '../../Preloader/Preloader';

export const ModalAddToWishList = ({
  closeModal,
  opened,
  modalWidth,
  preloaderHandler,
}) => {
  const [isActiveWishlist, setIsActiveWishList] = useState('new');
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState(false);
  const [isShowPreloader, setIsShowPreloader] = useState(false);
  const cartContext = useContext(CartContext);
  const { t } = useTranslation();

  const addItemToWishlist = async () => {
    if (isActiveWishlist === 'new' && inputValue.length === 0) {
      setInputError(true);
      return;
    }
    try {
      setIsShowPreloader(true);
      const res = await ServiceCustomer.addWishList({
        id: isActiveWishlist === 'new' ? null : isActiveWishlist,
        product_id: cartContext.state.wishlist.productId,
        name: inputValue,
      });

      if (res.status === 201) {
        closeModal();
        preloaderHandler(cartContext.state.wishlist.item);

        const newWishlist = await ServiceCustomer.getWishList();

        cartContext.addDataToWishList(newWishlist.data);

        setInputValue('');

        const del = await ServiceCart.deleteProduct(
          cartContext.state.wishlist.productId
        );

        cartContext.deleteProductCountInCart(
          del,
          cartContext.state.wishlist.productId
        );
        preloaderHandler(false);
      }
      setInputError(false);
    } catch (e) {
      console.log(e);
    } finally {
      setIsShowPreloader(false);
    }
  };

  const chooseWishlist = (id) => {
    if (id !== 'new') {
      setInputError(false);
    }
    setIsActiveWishList(id);
  };

  const items = cartContext.state.wishlist.data.map((item, i) => (
    <ModalAddToWishListItemSC
      onClick={() => chooseWishlist(item.id)}
      isActive={isActiveWishlist === item.id}
      key={i}
    >
      <span>
        {item.name} ({item.products.length})
      </span>
    </ModalAddToWishListItemSC>
  ));

  return (
    <ModalBase
      portalClassName="modal-add-to-wishlist"
      opened={opened}
      title={t('Добавление в список желаний')}
      closeModal={closeModal}
      modalWidth={modalWidth}
    >
      <ModalAddToWishListSC>
        {isShowPreloader && <Preloader borderRadius="20px" />}

        <section>
          {items}
          <ModalAddToWishListItemSC
            onClick={() => chooseWishlist('new')}
            isActive={isActiveWishlist === 'new'}
          >
            <label>
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                type="text"
                id="wishlist-input"
                name="wishlist"
                error={inputError}
                placeholder={t('Новый список желаний')}
              />
            </label>
          </ModalAddToWishListItemSC>

          {inputError && <p>{t('Введите название')}</p>}
        </section>

        <Button onClick={addItemToWishlist}>{t('Добавить')}</Button>
      </ModalAddToWishListSC>
    </ModalBase>
  );
};

ModalAddToWishList.propTypes = {
  opened: bool.isRequired,
  closeModal: func.isRequired,
  preloaderHandler: func,
  modalWidth: number.isRequired,
};
