import axios from 'axios';

import { MOVIES_LIST } from '../../constants/api';

import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  MERGE_MOVIES_SUCCESS,
  CLEAR_MOVIES,
} from './actionTypes';

const fetchMovies = (search = '', page = 1) => (dispatch) => {
  dispatch({ type: FETCH_MOVIES_START });
  if (page === 1) dispatch({ type: CLEAR_MOVIES });

  return axios.get(MOVIES_LIST(search, page))
    .then(({ data }) => {
      if (data.Response === 'True') {
        if (page === 1) {
          dispatch({
            type: FETCH_MOVIES_SUCCESS,
            data: data.Search,
            meta: { total: parseInt(data.totalResults, 10), page },
          });
        } else {
          dispatch({
            type: MERGE_MOVIES_SUCCESS,
            data: data.Search,
            meta: { total: parseInt(data.totalResults, 10), page },
          });
        }
      } else {
        dispatch({
          type: FETCH_MOVIES_SUCCESS,
          data: [],
          meta: { total: 0, page: 1 },
        });
      }
    })
    .catch(() => {
      dispatch({ type: FETCH_MOVIES_ERROR });
    });
};

const clearMovies = () => (dispatch) => dispatch({ type: CLEAR_MOVIES });

export { fetchMovies, clearMovies };
