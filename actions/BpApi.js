import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.BaseUrl}/api/v1`
});

export const getPortfolios = async () => {
  return axiosInstance.get('/portfolios').then((response) => response.data);
};
