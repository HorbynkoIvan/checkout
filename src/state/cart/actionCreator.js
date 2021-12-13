import {
  ADD_COUNT_APPLY_LOYALTY_POINTS,
  ADD_DATA_CART,
  ADD_DATA_PRODUCT_ID_TO_WISHLIST,
  ADD_DATA_TO_WISHLIST,
  DELETE_PRODUCT_COUNT_IN_CART,
  HIDE_SPECIAL_INFO_BLOCK,
  UPDATE_PRODUCT_COUNT_IN_CART,
} from './actionTypes';

export const cartActionsCreator = {
  addDataCart: function addDataCart(response) {
    this.dispatch({ type: ADD_DATA_CART, payload: response.data });
  },
  updateProductCountInCart: function updateProductCountInCart(
    response,
    itemId
  ) {
    const stateErrors = this.state.productsWithErrors;
    stateErrors.push(itemId);

    if (response.status === 200 || response.status === 201) {
      this.dispatch({
        type: UPDATE_PRODUCT_COUNT_IN_CART,
        payload: response.data,
        productsWithErrors: [],
      });
    }

    if (response.status === 422) {
      this.dispatch({
        type: UPDATE_PRODUCT_COUNT_IN_CART,
        productsWithErrors: stateErrors,
      });
    }
  },
  deleteProductCountInCart: function deleteProductCountInCart(
    response,
    itemId
  ) {
    const stateErrors = this.state.productsWithErrors;
    stateErrors.push(itemId);

    if (response.status === 201) {
      this.dispatch({
        type: DELETE_PRODUCT_COUNT_IN_CART,
        payload: response.data,
        productsWithErrors: [],
      });
    }
    if (
      response.status === 400 ||
      response.status === 404 ||
      response.status === 422
    ) {
      this.dispatch({
        type: DELETE_PRODUCT_COUNT_IN_CART,
        productsWithErrors: stateErrors,
      });
    }
  },
  hideSpecialInfoBlock: function hideSpecialInfoBlock(data) {
    this.dispatch({
      type: HIDE_SPECIAL_INFO_BLOCK,
      payload: data,
    });
  },

  addDataToWishList: function addDataToWishList(data) {
    this.dispatch({
      type: ADD_DATA_TO_WISHLIST,
      payload: data,
    });
  },
  addDataProductIdToWishList: function addDataProductIdToWishList(data) {
    this.dispatch({
      type: ADD_DATA_PRODUCT_ID_TO_WISHLIST,
      payload: data,
    });
  },
  applyLoyaltyPoints: function applyLoyaltyPoints(data) {
    this.dispatch({
      type: ADD_COUNT_APPLY_LOYALTY_POINTS,
      payload: data,
    });
  },
};
