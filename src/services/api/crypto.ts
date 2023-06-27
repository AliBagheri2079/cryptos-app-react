import axios from 'axios';

// const BASE_URL = 'https://api.coingecko.com/api';

// export default axios.create({
//   baseURL: BASE_URL,
//   // method: 'get',
// });

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});
