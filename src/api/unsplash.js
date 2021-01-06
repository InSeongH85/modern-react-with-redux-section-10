import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID -PRM8psaKFvgJ6uRBtbyAh2tHZ_S5U_0LvvwdQ-SuBs'
  }
});