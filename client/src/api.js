import axios from "axios";

const host = "http://localhost:4000";

export function create(url) {
  return axios.post(`${host}/api/short_url`, { url: url });
}

export function get(slug) {
  return axios.get(`${host}/api/short_url/${slug}`);
}
