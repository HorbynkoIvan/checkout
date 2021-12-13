import axios from 'axios';
import {
  SERVICE_CUSTOMER_ADD_WISH_LIST,
  SERVICE_CUSTOMER_GET_CONTACTS,
  SERVICE_CUSTOMER_CHECK_PHONE_IS_REGISTERED,
  SERVICE_CUSTOMER_GET_ADDRESSES,
  SERVICE_CUSTOMER_GET_PHONE_CALLBACK,
  SERVICE_CUSTOMER_GET_WISH_LIST,
  SERVICE_CUSTOMER_RESET_PASSWORD,
} from './api-config';

export const ServiceCustomer = {
  getContacts: async () => {
    const { data } = await axios.get(SERVICE_CUSTOMER_GET_CONTACTS);
    return data;
  },
  getAddresses: async () => {
    const { data } = await axios.get(SERVICE_CUSTOMER_GET_ADDRESSES);
    return data;
  },
  getWishList: () => axios.get(SERVICE_CUSTOMER_GET_WISH_LIST),
  addWishList: (item) =>
    axios.post(SERVICE_CUSTOMER_ADD_WISH_LIST, item, {
      headers: { 'Content-type': 'application/json' },
    }),
  getPhoneCallback: (data) =>
    axios.post(
      SERVICE_CUSTOMER_GET_PHONE_CALLBACK,
      { phone: data },
      {
        headers: { 'Content-type': 'application/json' },
      }
    ),
  checkPhoneIsRegistered: async (data) =>
    axios.post(
      SERVICE_CUSTOMER_CHECK_PHONE_IS_REGISTERED,
      { phone: data },
      {
        headers: { 'Content-type': 'application/json' },
      }
    ),
  resetPassword: (phone) =>
    axios.post(
      SERVICE_CUSTOMER_RESET_PASSWORD,
      {
        phone,
      },
      {
        headers: { 'Content-type': 'application/json' },
      }
    ),
};
