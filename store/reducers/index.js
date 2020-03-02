import { combineReducers } from 'redux';

import favourites from './favourites';
import images from './images';
import movies from './movies';

export default combineReducers({
  favourites,
  images,
  movies,
});
