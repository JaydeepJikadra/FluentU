/**
 * @format
 * @flow
 */
import axios from 'axios';
const qs = require('qs');
import {
  checkInternetConnection,
  showToast,
  redirectToLogin,
  isEmpty,
} from './functions';

export function handler(err: any, translate: Function, logOut: Function) {
  let error = err;

  if (err.response && err.response.data.hasOwnProperty('message')) {
    error = err.response.data;
  } else if (!err.hasOwnProperty('message')) {
    error = err.toJSON();
  }
  if ('errors' in error && !isEmpty(error.errors)) {
    if (Object.keys(error.errors)[0]) {
      if (Array.isArray(error.errors[Object.keys(error.errors)[0]])) {
        showToast({ message: error.errors[Object.keys(error.errors)[0]][0] });
      }
    }
  } else {
    showToast({ message: error.message });
  }
  error.message === 'Unauthenticated.' &&
    redirectToLogin('Tasks', translate('UNAUTHENTICATED'), logOut);
  return new Error(error.message);
}
export async function networkCall(
  path: string,
  type: string,
  apiParams: object | string,
  headers: object,
  translate: Function,
  logOut?: Function,
  params?: object | string,
): Promise<any> {
  __DEV__ ? console.log('SERVICE_CALL', path, type, params) : '';
  const connected = await checkInternetConnection();
  console.log('TCL: connected', connected);
  if (connected) {
    try {
      const response = await axios({
        method: type,
        url: path,
        ...(apiParams !== undefined &&
          apiParams !== '' && {
            data: apiParams,
          }),
        ...(params !== undefined && {
          params: params,
        }),
        maxRedirects: 0,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          ...headers,
        },
        paramsSerializer(params: object) {
          return qs.stringify(params, { arrayFormat: 'brackets' });
        },
      });
      // console.log('TCL: response', response);
      return response;
    } catch (error: any) {
      if (logOut && logOut !== null) throw handler(error, translate, logOut);
    }
  } else if (!connected && connected !== null) {
    showToast({ message: translate('NO INTERNET MSG') });
  }
}
