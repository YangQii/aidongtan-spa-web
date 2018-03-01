import axios from 'axios';

const url = 'http://39.106.151.4:8080/love-move/';

const http = axios.create({
  baseURL: url,
  params: {
  },
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});

export default http;
