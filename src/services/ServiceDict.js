import axios from 'axios';
import {
  SERVICE_DICT_GET_CITY,
  SERVICE_DICT_GET_DELIVERY_METHODS,
  SERVICE_DICT_GET_DELIVERY_TIME_STEP,
  SERVICE_DICT_GET_DEPARTMENT,
  SERVICE_DICT_GET_PAYMENTS_METHODS,
  SERVICE_DICT_GET_STREETS,
} from './api-config';

export const ServiceDict = {
  getDeliveryMethods: async (cityId) => {
    const { data } = await axios.get(
      `${SERVICE_DICT_GET_DELIVERY_METHODS}?city_id=${cityId}`
    );
    return data;
  },

  getDeliveryTimeStep: async (timeDate) => {
    const { data } = await axios.get(
      `${SERVICE_DICT_GET_DELIVERY_TIME_STEP}?date=${timeDate}`
    );
    return data;
  },

  getPaymentMethods: async () => {
    const { data } = await axios.get(SERVICE_DICT_GET_PAYMENTS_METHODS);
    return data;
  },

  getCity: async (query) => {
    const { data } = await axios.get(
      `${SERVICE_DICT_GET_CITY}?search=${query}`
    );
    return data;
  },

  getDepartments: async (cityRef, responsible, search) => {
    const { data } = await axios.get(
      `${SERVICE_DICT_GET_DEPARTMENT}?city_id=${cityRef}&responsible=${responsible}&search=${search}`
    );
    return data;
  },

  getStreets: async (query, cityId) => {
    const { data } = await axios.get(
      `${SERVICE_DICT_GET_STREETS}?search=${query}&city_id=${cityId}`
    );
    return data;
  },
};
