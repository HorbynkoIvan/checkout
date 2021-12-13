import {
  ADD_DATA_CART,
  UPDATE_PRODUCT_COUNT_IN_CART,
  DELETE_PRODUCT_COUNT_IN_CART,
  HIDE_SPECIAL_INFO_BLOCK,
  ADD_DATA_TO_WISHLIST,
  ADD_DATA_PRODUCT_ID_TO_WISHLIST,
  ADD_COUNT_APPLY_LOYALTY_POINTS,
} from './actionTypes';

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_DATA_CART:
      return { ...state, dataCart: action.payload };
    case UPDATE_PRODUCT_COUNT_IN_CART:
      return action.payload !== undefined
        ? {
            ...state,
            dataCart: action.payload,
            productsWithErrors: action.productsWithErrors,
          }
        : {
            ...state,
            productsWithErrors: action.productsWithErrors,
          };
    case DELETE_PRODUCT_COUNT_IN_CART:
      return action.payload !== undefined
        ? {
            ...state,
            dataCart: action.payload,
            productsWithErrors: action.productsWithErrors,
          }
        : {
            ...state,
            productsWithErrors: action.productsWithErrors,
          };
    case HIDE_SPECIAL_INFO_BLOCK:
      return {
        ...state,
        specialInfoBlockState: {
          ...state.specialInfoBlockState,
          [action.payload]: false,
        },
      };

    case ADD_DATA_TO_WISHLIST:
      return {
        ...state,
        wishlist: {
          ...state.wishlist,
          data: action.payload,
        },
      };
    case ADD_DATA_PRODUCT_ID_TO_WISHLIST:
      return {
        ...state,
        wishlist: {
          ...state.wishlist,
          productId: action.payload.productId,
          item: action.payload.item,
        },
      };
    case ADD_COUNT_APPLY_LOYALTY_POINTS:
      return {
        ...state,
        applyLoyaltyPoints: action.payload,
      };
    default:
      return state;
  }
};
