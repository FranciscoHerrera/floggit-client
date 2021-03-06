import axios from 'axios';
import { SERVICE_URL_LOCAL } from '../constants';

const SERVICE_URL = SERVICE_URL_LOCAL;

const validateStatus = status => (response) => {
  if (response.status !== status) {
    throw new Error('Service returned a bad status');
  }
  return response;
};

const getAll = () => axios.get(`${SERVICE_URL}/v1/whiteboards`)
  .then(validateStatus(200))
  .then(response => response.data.whiteboards.map(item => ({
    // eslint-disable-next-line no-underscore-dangle
    id: item._id,
    name: item.name,
  })))
  .catch(err => err.message);

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
  getAll,
  add,
  remove,
};

export default publicAPI;
