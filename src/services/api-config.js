import { pageLangParamRedesign } from '../helpers/helpers';

export const API_ROOT = `${pageLangParamRedesign}apiv2`;
// SERVICE CART
export const SERVICE_CART_GET_CART = `${API_ROOT}/cart/default/cart-info`;
export const SERVICE_CART_UPDATE = `${API_ROOT}/cart/default/update`;
export const SERVICE_CART_UPDATE_PRODUCT_IN_CART = `${API_ROOT}/cart/default/update-product`;
export const SERVICE_CART_DELETE_PRODUCT_IN_CART = `${API_ROOT}/cart/default/remove-product`;
export const SERVICE_CART_APPLY_PROMOCODE = `${API_ROOT}/cart/default/apply-promocode`;
export const SERVICE_CART_REMOVE_PROMOCODE = `${API_ROOT}/cart/default/remove-promocode`;
export const SERVICE_CART_APPLY_LOYALTY_POINTS = `${API_ROOT}/cart/default/apply-loyalty-points`;
export const SERVICE_CART_CANCEL_LOYALTY_POINTS = `${API_ROOT}/cart/default/cancel-loyalty-points`;
export const SERVICE_CART_SEND_FORM_CHECKOUT = `${API_ROOT}/cart/default/checkout`;
export const SERVICE_CART_REMOVE_GIFT = `${API_ROOT}/cart/default/remove-gift`;

// SERVICE DICT
export const SERVICE_DICT_GET_DELIVERY_METHODS = `${API_ROOT}/dict/default/delivery-methods`;
export const SERVICE_DICT_GET_DELIVERY_TIME_STEP = `${API_ROOT}/dict/default/delivery-time-step`;
export const SERVICE_DICT_GET_PAYMENTS_METHODS = `${API_ROOT}/dict/default/payment-methods`;
export const SERVICE_DICT_GET_CITY = `${API_ROOT}/dict/default/search-city`;
export const SERVICE_DICT_GET_DEPARTMENT = `${API_ROOT}/dict/default/search-department`;
export const SERVICE_DICT_GET_STREETS = `${API_ROOT}/dict/default/search-address`;
// SERVICE CUSTOMER
export const SERVICE_CUSTOMER_GET_CONTACTS = `${API_ROOT}/customer/default/contacts`;
export const SERVICE_CUSTOMER_GET_ADDRESSES = `${API_ROOT}/customer/default/addresses`;
export const SERVICE_CUSTOMER_GET_WISH_LIST = `${API_ROOT}/customer/wish-list`;
export const SERVICE_CUSTOMER_ADD_WISH_LIST = `${API_ROOT}/customer/wish-list/add`;
export const SERVICE_CUSTOMER_GET_PHONE_CALLBACK = `${API_ROOT}/customer/default/callback`;
export const SERVICE_CUSTOMER_CHECK_PHONE_IS_REGISTERED = `${API_ROOT}/customer/default/check-phone`;
export const SERVICE_CUSTOMER_RESET_PASSWORD = `${API_ROOT}/customer/default/reset-password`;

// SERVICE AUTH
export const SERVICE_AUTH_GET_USER = `${API_ROOT}/auth/login`;
export const SERVICE_AUTH_LOGIN_WITH_SMS_GET_CODE = `${API_ROOT}/auth/login-with-sms/send-code`;
export const SERVICE_AUTH_LOGIN_WITH_SMS = `${API_ROOT}/auth/login-with-sms`;
export const SERVICE_AUTH_LOGIN_WITH_SOCIAL = `${API_ROOT}/auth/social`;
