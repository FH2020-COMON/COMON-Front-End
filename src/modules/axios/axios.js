import axios from "axios";

const DOMAIN = "http://ec2-54-180-98-91.ap-northeast-2.compute.amazonaws.com:8000";
axios.defaults.withCredentials = false;
export const request = (method, url, headers, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    headers: headers,
    data,
  })
    .then((res) => res.data)
};