import axios from 'axios';

import config from 'config';
import routes from 'config/routes';
import { getToken, removeToken, setToken } from 'utils/token';

export default class Http {
  instance;
  headers;

  constructor(baseUrl = config.apiUrl) {
    this.headers = this.getHeaders();

    this.instance = axios.create({
      baseURL: baseUrl,
    });

    this.initialInterceptors();
  }

  initialInterceptors = () => {
    this.instance.interceptors.response.use(this.handleResponse, this.handleError);

    this.instance.interceptors.request.use(this.handleRequest);
  };

  handleRequest = (config) => {
    config = {
      ...config,
      headers: {
        ...config.headers,
        ...this.getHeaders(),
        ...this.headers,
      },
    };

    return config;
  };

  handleResponse = (response) => {
    return response.data;
  };

  handleError = (err) => {
    if (err.response) {
      const { status, data, headers } = err.response;
      if (status === 401) {
        // Refresh token and retry original request
        return this.refreshToken()
          .then((newToken) => {
            this.headers['Authorization'] = `Token ${newToken}`;
            // Retry original request with new token
            return this.instance(err.config);
          })
          .catch((error) => {
            removeToken({ name: config.tokenName });
            window.location.href = routes.login.path;
            return Promise.reject(error);
          });
      }

      return Promise.reject({
        status,
        data,
        headers,
      });
    } else {
      return Promise.reject({
        status: 500,
        headers: null,
        data: err.message,
      });
    }
  };

  refreshToken() {
    const refreshToken = getToken({ name: config.refreshTokenName });
    if (!refreshToken) {
      throw new Error('No refresh token found');
    }

    const payload = {
      refreshToken,
    };

    return this.instance
      .post('/refresh-token', payload)
      .then((response) => {
        const { accessToken } = response.data;
        setToken({ name: config.tokenName, value: accessToken });
        return accessToken;
      })
      .catch((error) => {
        throw error;
      });
  }

  getHeaders = () => {
    const token = this.token();

    const headers = {
      'content-type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Token ${token}`;
    }

    return headers;
  };

  token = () => {
    return getToken({ name: config.tokenName });
  };

  changeHeaders = (headerConfig) => {
    this.headers = {
      ...this.headers,
      ...headerConfig,
    };
  };

  get(args) {
    return this.instance.get(args.endpoint).then((response) => {
      return response;
    });
  }

  post(args) {
    return this.instance.post(args.endpoint, args.payload, args.config).then((response) => {
      return response;
    });
  }

  patch(args) {
    return this.instance.patch(args.endpoint, args.payload).then((response) => {
      return response;
    });
  }

  put(parameters) {
    return this.instance
      .put(parameters.endpoint, parameters.payload, parameters.config)
      .then((response) => {
        return response;
      });
  }

  delete(parameters) {
    return Promise.resolve({});
  }
}