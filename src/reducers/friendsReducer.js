import { FETCH_FRIENDS_SUCCESS, PATCH_FRIEND_SUCCESS } from '../actions';

const initialState = {
  friends: [],
  total: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        pending: false,
        friends: action.payload.data,
        total: action.payload.total,
      };
    case PATCH_FRIEND_SUCCESS:
      return {
        ...state,
        friends: state.friends.map(f =>
          action.payload.id === f.id ? action.payload.data : f,
        ),
      };
    default:
      return state;
  }
}
