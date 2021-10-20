import axios from 'axios';

const url="http://localhost:4000"

export function create(url) {
  return axios.post(`${url}/api/short_url}`, url)
}

export function get(slug) {
  return axios.get(`${url}/api/short_url/${slug}`)
}