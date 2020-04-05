import axios from 'axios';

import { PAGE_LIMIT } from '../const';

const API_URL = 'http://localhost:3020';

function fetchFriends(params) {
  return axios.get(`${API_URL}/friends`, {
    params: {
      _limit: PAGE_LIMIT,
      ...params,
    },
  });
}

function createFriend(body) {
  return axios.post(`${API_URL}/friends`, body);
}

function patchFriend(id, body) {
  return axios.patch(`${API_URL}/friends/${id}`, body);
}

export { fetchFriends, createFriend, patchFriend };
