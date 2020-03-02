import { WikiItem, MovieItem, ReduxState } from '@constants/interfaces';

import {
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
} from '../actions/actionTypes';

const initialState = {
  favourites: [],
};

interface Action {
  data?: Array<WikiItem>|Array<MovieItem>;
  filterParam: string;
  filterValue: string;
  type: string;
}

type State = ReduxState.favourites;

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return { ...state, favourites: [...state.favourites, action.data] };
    case REMOVE_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.filter((item) => (
          item[action.filterParam] !== action.filterValue
        )),
      };
    default:
      return state;
  }
}
