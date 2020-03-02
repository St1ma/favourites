import { MovieItem, ReduxState } from '@constants/interfaces';

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

interface Action {
  data?: Array<MovieItem>;
  type: string;
  meta: ReduxState.movies.meta;
}

type State = ReduxState.movies;

export default (state: State = initialState, action: Action): State => {
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
