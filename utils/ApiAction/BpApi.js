import axios from 'axios';
import API from '../EndPoints';

const axiosInstance = axios.create({
  baseURL: `${process.env.BaseUrl}`
});

export const getPortfolios = async () => {
  return axiosInstance.get(API.userPost).then((response) => response.data);
};
