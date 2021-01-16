import Cookies from 'js-cookie';
import axiosInstance from '../helper/ApiRequest';
import API from '../utils/EndPoints';
import { authHeaders } from '../utils/GlobalFunction';

export const getPortfolios = async () => {
  const token = Cookies.get('token');
  return axiosInstance
    .get(API.userPost, authHeaders(token))
    .then((response) => response.data)
    .catch((error) => {
      if (error) throw error;
    });
};
