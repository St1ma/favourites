import {
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
} from '../actions/actionTypes';

const initialState = {
  favourites: [],
};

export default function user(state = initialState, action) {
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
