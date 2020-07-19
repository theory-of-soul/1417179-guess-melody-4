import * as axios from "axios";

const Error = {
  UNAUTHORIZED: 401
};

const api = (onUnauthorized) => {
  const instance = axios.create({
    baseURL: `https://4.react.pages.academy/guess-melody`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onFail = (error) => {
    if (error.response.status === Error.UNAUTHORIZED) {
      onUnauthorized();

      return Promise.reject(error);
    }

    return Promise.reject(error);
  };

  instance.interceptors.response.use(onSuccess, onFail);

  return instance;
};

export default api;
