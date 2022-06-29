import axiosInstance from '.';
import AuthService from '../services/auth-service';

const setupJWTInterceptors = (store) => {
  store;
  axiosInstance.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${localStorage.getItem(
        'x-access-token'
      )}`;

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (config) => {
      return config;
    },
    (error) => {
      const originalRequest = error.config;

      if (
        error.response.status === 401 &&
        !originalRequest._isRetry
      ) {
        try {
          originalRequest._isRetry = true;
          AuthService.refresh().then((res) => {
            debugger;
          });
        } catch (ex) {}
      }
    },
    (error) => {
      const origRequest = error.config;

      if (error.response.status === 401 && !origRequest._isRetry) {
        try {
          origRequest._isRetry = true;
          AuthService.refresh().then((res) => {
            if (res.status === 201) {
              localStorage.setItem(
                'x-access-token',
                res.data.accessToken
              );

              config.headers.Authorization = `Bearer ${localStorage.getItem(
                'x-access-token'
              )}`;

              return axiosInstance(originalRequest);
            }
          });
        } catch (ex) {
          return Promise.reject(ex);
        }
      }
    }
  );
};

export default setupJWTInterceptors;
