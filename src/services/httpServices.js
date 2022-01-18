import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    authorization: `Bearer ${sessionStorage.getItem("token")}`
  }

});


const responseBody = (res) => res.data;
export const request = {
  get: (url) => instance.get(url).then(responseBody),
  post: (url, body) => instance.post(url, body).then(responseBody),
  patch: (url, body) => instance.patch(url, body).then(responseBody),
  delete: (url) => instance.delete(url).then(responseBody),
};
