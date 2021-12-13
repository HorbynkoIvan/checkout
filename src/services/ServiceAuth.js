import axios from 'axios';
import {
  SERVICE_AUTH_GET_USER,
  SERVICE_AUTH_LOGIN_WITH_SMS,
  SERVICE_AUTH_LOGIN_WITH_SMS_GET_CODE,
  SERVICE_AUTH_LOGIN_WITH_SOCIAL,
} from './api-config';

export const ServiceAuth = {
  getUser: async () => {
    const data = axios.get(SERVICE_AUTH_GET_USER);
    return data;
  },
  authUser: (item) =>
    axios.post(SERVICE_AUTH_GET_USER, item, {
      headers: { 'Content-type': 'application/json' },
    }),
  loginWithSmsGetCode: (phone) =>
    axios.post(
      SERVICE_AUTH_LOGIN_WITH_SMS_GET_CODE,
      {
        phone,
      },
      {
        headers: { 'Content-type': 'application/json' },
      }
    ),
  loginWithSms: (phone, code) =>
    axios.post(
      SERVICE_AUTH_LOGIN_WITH_SMS,
      {
        phone,
        code,
      },
      {
        headers: { 'Content-type': 'application/json' },
      }
    ),
  loginWithSocial: (provider, accessToken, idToken) =>
    axios.post(
      SERVICE_AUTH_LOGIN_WITH_SOCIAL,
      idToken
        ? {
            provider,
            accessToken,
            idToken,
          }
        : {
            provider,
            accessToken,
          },
      { headers: { 'Content-type': 'application/json' } }
    ),
};
