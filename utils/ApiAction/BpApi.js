import getConfig from 'next/config';
import axios from 'axios';
import API from '../EndPoints';

const { publicRuntimeConfig } = getConfig();

const axiosInstance = axios.create({
  baseURL: `${publicRuntimeConfig.BaseUrl}`
});

export const getPortfolios = async () => {
  return axiosInstance.get(API.userPost).then((response) => response.data);
};
