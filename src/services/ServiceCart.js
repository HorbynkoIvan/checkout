import axios from 'axios';
import {
  SERVICE_CART_APPLY_LOYALTY_POINTS,
  SERVICE_CART_APPLY_PROMOCODE,
  SERVICE_CART_CANCEL_LOYALTY_POINTS,
  SERVICE_CART_DELETE_PRODUCT_IN_CART,
  SERVICE_CART_GET_CART,
  SERVICE_CART_REMOVE_GIFT,
  SERVICE_CART_REMOVE_PROMOCODE,
  SERVICE_CART_SEND_FORM_CHECKOUT,
  SERVICE_CART_UPDATE_PRODUCT_IN_CART,
  SERVICE_CART_UPDATE,
} from './api-config';

export const ServiceCart = {
  getCart: () => axios.get(SERVICE_CART_GET_CART),
  update: (updatedFieldObj) =>
    axios.post(SERVICE_CART_UPDATE, updatedFieldObj, {
      headers: { 'Content-type': 'application/json' },
    }),
  updateProductInCart: (productId, count, setCode) =>
    axios.post(
      SERVICE_CART_UPDATE_PRODUCT_IN_CART,
      {
        id: productId,
        quantity: count,
        setCode: setCode || null,
        recalculate: 'true',
      },
      {
        headers: { 'Content-type': 'application/json' },
      }
    ),
  deleteProduct: (id, setCode) =>
    axios.delete(SERVICE_CART_DELETE_PRODUCT_IN_CART, {
      headers: {
        'Content-type': 'application/json',
      },
      data: {
        product_id: id || null,
        setCode: setCode || null,
      },
    }),
  applyPromocode: (code) =>
    axios.post(
      SERVICE_CART_APPLY_PROMOCODE,
      {
        code,
      },
      {
        headers: { 'Content-type': 'application/json' },
      }
    ),
  removePromocode: (codeId) =>
    axios.post(
      SERVICE_CART_REMOVE_PROMOCODE,
      {
        code: codeId,
      },
      {
        headers: { 'Content-type': 'application/json' },
      }
    ),
  applyLoyaltyPoints: (count) =>
    axios.post(
      SERVICE_CART_APPLY_LOYALTY_POINTS,
      {
        points: count,
        is_uah: true,
      },
      {
        headers: { 'Content-type': 'application/json' },
      }
    ),
  cancelLoyaltyPoints: () => axios.get(SERVICE_CART_CANCEL_LOYALTY_POINTS),
  sendFormCheckout: async (formData) =>
    axios.post(SERVICE_CART_SEND_FORM_CHECKOUT, formData, {
      headers: { 'Content-type': 'application/json' },
    }),
  removeGift: (id) =>
    axios.delete(`${SERVICE_CART_REMOVE_GIFT}?id=${id}`, {
      headers: {
        'Content-type': 'application/json',
      },
    }),
};
