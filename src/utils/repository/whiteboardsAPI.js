import axios from 'axios';
import { SERVICE_URL_LOCAL } from '../constants';

const SERVICE_URL = SERVICE_URL_LOCAL;

const validateStatus = status => (response) => {
  if (response.status !== status) {
    throw new Error('Service returned a bad status');
  }
  return response;
};

const add = name =>
  axios({
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    method: 'POST',
    url: `${SERVICE_URL}/v1/whiteboards`,
    data: JSON.stringify({ name }),
  })
    .then(validateStatus(201))
    .then(response => response.data.id)
    .catch(err => err.message);

const remove = id => axios.delete(`${SERVICE_URL}/v1/whiteboards/${id}`)
  .then(validateStatus(204))
  .catch(err => err.message);

const publicAPI = {
  add,
  remove,
};

export default publicAPI;
