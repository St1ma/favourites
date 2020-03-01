import axios from 'axios';

import { IMAGES_LIST } from '../../constants/api';

import {
  FETCH_WIKI_IMAGES_START,
  FETCH_WIKI_IMAGES_SUCCESS,
  FETCH_WIKI_IMAGES_ERROR,
  MERGE_WIKI_IMAGES_SUCCESS,
  CLEAR_IMAGES,
} from './actionTypes';

const fetchImages = (search = '', gaicontinue = '') => (dispatch) => {
  dispatch({ type: FETCH_WIKI_IMAGES_START });
  if (!gaicontinue) dispatch({ type: CLEAR_IMAGES });

  return axios.get(IMAGES_LIST(search, gaicontinue))
    .then(({ data }) => {
      if (gaicontinue) {
        dispatch({
          type: MERGE_WIKI_IMAGES_SUCCESS,
          data: data.query.allimages,
          meta: { gaicontinue: data.continue.aicontinue },
        });
      } else {
        dispatch({
          type: FETCH_WIKI_IMAGES_SUCCESS,
          data: data.query.allimages,
          meta: { gaicontinue: data.continue.aicontinue },
        });
      }
    })
    .catch(() => {
      dispatch({ type: FETCH_WIKI_IMAGES_ERROR });
    });
};

const clearImages = () => (dispatch) => dispatch({ type: CLEAR_IMAGES });

export { fetchImages, clearImages };
