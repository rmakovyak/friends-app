import { fetchFriends, createFriend, patchFriend } from '../services/friends';

export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const CREATE_FRIEND_SUCCESS = 'CREATE_FRIEND_SUCCESS';
export const PATCH_FRIEND_SUCCESS = 'PATCH_FRIEND_SUCCESS';

function fetchFriendsSuccess(payload) {
  return {
    type: FETCH_FRIENDS_SUCCESS,
    payload,
  };
}

function createFriendSuccess(payload) {
  return {
    type: CREATE_FRIEND_SUCCESS,
    payload,
  };
}

function patchFriendSuccess(payload) {
  return {
    type: PATCH_FRIEND_SUCCESS,
    payload,
  };
}

function getFriends(params) {
  return dispatch =>
    fetchFriends(params).then(({ data, headers }) => {
      dispatch(
        fetchFriendsSuccess({
          data,
          total: parseInt(headers['x-total-count'], 10),
        }),
      );
    });
}

function addFriend(friend) {
  return dispatch =>
    createFriend(friend).then(({ data }) =>
      dispatch(createFriendSuccess(data)),
    );
}

function updateFriend(id, body) {
  return dispatch =>
    patchFriend(id, body).then(({ data }) =>
      dispatch(patchFriendSuccess({ id, data })),
    );
}

export { getFriends, addFriend, updateFriend };
