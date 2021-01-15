import getConfig from 'next/config';
import superagent from 'superagent';

const { publicRuntimeConfig } = getConfig();

export default function request({ endpoint, method, token = null, payload, query, type = 'application/json' }) {
  const { baseUrl } = publicRuntimeConfig;
  const _url = baseUrl + endpoint;
  const apiRequest = superagent(method, _url);
  apiRequest.set('x-api-key', token);

  return new Promise((resolve, reject) => {
    apiRequest
      .set('Content-Type', type)
      .send(payload)
      .query(query)
      .then((res) => {
        resolve(res.body);
      })
      .catch((error) => {
        if (error) throw error;
      });
  });
}
