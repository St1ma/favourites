import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  MERGE_MOVIES_SUCCESS,
  CLEAR_MOVIES,
} from '../actions/actionTypes';

const initialState = {
  movies: [],
  finished: true,
  error: false,
  meta: {
    total: 0,
    page: 1,
  },
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_START:
      return { ...state, finished: false, error: false };
    case CLEAR_MOVIES:
      return { ...state, movies: [] };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state, finished: true, movies: action.data, meta: action.meta,
      };
    case MERGE_MOVIES_SUCCESS:
      return {
        ...state, finished: true, movies: [...state.movies, ...action.data], meta: action.meta,
      };
    case FETCH_MOVIES_ERROR:
      return { ...state, finished: true, error: true };
    default:
      return state;
  }
}
