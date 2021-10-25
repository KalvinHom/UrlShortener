import axios from "axios";

const host = process.env.REACT_APP_HOST_URL;

export function create(url) {
  return axios.post(`${host}/api/short_url`, { url: url });
}

export function get(slug) {
  return axios.get(`${host}/api/short_url/${slug}`);
}
