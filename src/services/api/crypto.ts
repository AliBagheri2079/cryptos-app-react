import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';

export default axios.create({
  baseURL: BASE_URL,
});
