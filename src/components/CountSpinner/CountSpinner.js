import React, { useContext, useState } from 'react';
import { any, func } from 'prop-types';
import { ReactComponent as MinusIcon } from '../../assets/img/minus-icon.svg';
import { ReactComponent as PlusIcon } from '../../assets/img/plus-icon.svg';
import { ScCountSpinner } from './styled';
import { CartContext } from '../../context';
import { ServiceCart } from '../../services/ServiceCart';

export const CountSpinner = ({
  data,
  itemId,
  setCode,
  item,
  preloaderHandler,
}) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const cartContext = useContext(CartContext);

  const updateProductInCart = async (id, quantity, setCodeValue) => {
    setIsDisabled(true);
    try {
      preloaderHandler(item);
      const res = await ServiceCart.updateProductInCart(
        id,
        quantity,
        setCodeValue
      );
      cartContext.updateProductCountInCart(res, itemId);
    } catch (e) {
      console.log(e);
    } finally {
      setIsDisabled(false);
      preloaderHandler(false);
    }
  };

  const additionHandler = () => {
    updateProductInCart(itemId, 1, setCode);
  };

  const subtractionHandler = () => {
    if (data > 1) {
      updateProductInCart(itemId, -1, setCode);
    }
  };

  return (
    <ScCountSpinner>
      <button
        type="button"
        className={data === 1 || isDisabled ? 'is-disabled' : null}
        onClick={subtractionHandler}
      >
        <MinusIcon />
      </button>

      <span>{data}</span>

      <button
        type="button"
        className={isDisabled ? 'is-disabled' : null}
        onClick={additionHandler}
      >
        <PlusIcon />
      </button>
    </ScCountSpinner>
  );
};

CountSpinner.propTypes = {
  data: any,
  itemId: any,
  setCode: any,
  item: any,
  preloaderHandler: func,
};
