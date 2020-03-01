import { connect } from 'react-redux';

import { fetchMovies, clearMovies } from '../../redux/actions/movies';

import MoviesView from './component.tsx';

const mapStateToProps = (state) => ({
  movies: state.movies.movies.map((item) => ({ ...item, isFavourite: state.favourites.favourites.some((fav) => fav.imdbID === item.imdbID) })),
  fetchFinished: state.movies.finished,
  fetchError: state.movies.error,
  meta: state.movies.meta,
});

export default connect(
  mapStateToProps,
  { fetchMovies, clearMovies },
)(MoviesView);
