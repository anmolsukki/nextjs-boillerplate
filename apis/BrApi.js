import API from '../utils/EndPoints';
import apiCall from './ApiRequest';

export function getPortfolios() {
  return apiCall({
    endpoint: API.userPost,
    method: 'get'
  });
}
