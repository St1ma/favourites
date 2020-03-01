import {
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
} from './actionTypes';

const addToFavourites = (item, type) => (dispatch) => {
  dispatch({ type: ADD_FAVOURITE, data: { ...item, type } });
};

const removeFromFavourites = (item, type) => (dispatch) => {
  const params = {
    wiki: 'name',
    movie: 'imdbID',
  };

  dispatch({ type: REMOVE_FAVOURITE, filterParam: params[type], filterValue: item[params[type]] });
};

export {
  addToFavourites,
  removeFromFavourites,
};
