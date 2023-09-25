import axios from 'axios';

const baseURL = import.meta.env.VITE_COINGECKO_BASE_URL;

const coingeckoApi = axios.create({
  baseURL,
});

export { coingeckoApi };
