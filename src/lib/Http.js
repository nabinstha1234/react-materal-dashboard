import axios from 'axios';

import projectConfig from 'config';
import routes from 'config/routes';
import { getToken, removeToken, setToken } from 'utils/token';

export default class Http {
  instance;
  headers;

  constructor(baseUrl = projectConfig.apiUrl) {
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
      },
    };
    return config;
  };

  handleResponse = (response) => {
    return response.data;
  };

  handleError = async (err) => {
    if (err.response) {
      const { status, data, headers } = err.response;
      if (status === 404 && String(data.error).trim() === 'Not authorized') {
        // Refresh token and retry original request
        return this.refreshToken()
          .then((newToken) => {
            this.headers['Authorization'] = `Bearer ${newToken}`;
            // Retry original request with new token
            return this.instance(err.config);
          })
          .catch((error) => {
            removeToken({ name: projectConfig.tokenName });
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

  async refreshToken() {
    const refreshToken = getToken({ name: projectConfig.refreshTokenName });
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
        setToken({ name: projectConfig.tokenName, value: accessToken });
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
      headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
  };

  token = () => {
    return getToken({ name: projectConfig.tokenName });
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
