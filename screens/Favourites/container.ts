import { connect } from 'react-redux';

import { removeFromFavourites } from '@store/actions/favourites';

import FavouritesView from './component.tsx';

const mapStateToProps = (state) => ({
  images: state.favourites.favourites.filter((item) => item.type === 'wiki'),
  movies: state.favourites.favourites.filter((item) => item.type === 'movie'),
});

export default connect(
  mapStateToProps,
  { removeFromFavourites },
)(FavouritesView);
