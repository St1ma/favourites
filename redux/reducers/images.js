import {
  FETCH_WIKI_IMAGES_START,
  FETCH_WIKI_IMAGES_SUCCESS,
  FETCH_WIKI_IMAGES_ERROR,
  MERGE_WIKI_IMAGES_SUCCESS,
  CLEAR_IMAGES,
} from '../actions/actionTypes';

const initialState = {
  images: [],
  finished: true,
  error: false,
  meta: { gaicontinue: '' },
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case FETCH_WIKI_IMAGES_START:
      return { ...state, finished: false, error: false };
    case CLEAR_IMAGES:
      return { ...state, images: [] };
    case FETCH_WIKI_IMAGES_SUCCESS:
      return {
        ...state, finished: true, images: action.data, meta: action.meta,
      };
    case MERGE_WIKI_IMAGES_SUCCESS:
      return {
        ...state, finished: true, images: [...state.images, ...action.data], meta: action.meta,
      };
    case FETCH_WIKI_IMAGES_ERROR:
      return { ...state, finished: true, error: true };
    default:
      return state;
  }
}
