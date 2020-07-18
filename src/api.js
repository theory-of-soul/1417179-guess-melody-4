import * as axios from "axios";

const api = () => {
  return axios.create({
    baseURL: `https://4.react.pages.academy/guess-melody`,
    timeout: 5000,
    withCredentials: true
  });
};

export default api;
