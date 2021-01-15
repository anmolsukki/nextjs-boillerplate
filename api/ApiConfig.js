import axios from 'axios';
import getConfig from 'next/config';
import API from '../utils/EndPoints';

const { publicRuntimeConfig } = getConfig();

const axiosInstance = axios.create({
  baseURL: `${publicRuntimeConfig.baseUrl}`
});

export const getPortfolios = async () => {
  return axiosInstance.get(API.userPost).then((response) => response.data);
};
