import { WikiItem, ReduxState } from '@constants/interfaces';

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

interface Action {
  data?: Array<WikiItem>;
  type: string;
  meta: ReduxState.images.meta;
}

type State = ReduxState.images;

export default (state: State = initialState, action: Action): State => {
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
