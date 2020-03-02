import { connect } from 'react-redux';

import { fetchMovies, clearMovies } from '@redux/actions/movies';

import { ReduxState, MovieItem } from '@constants/iterfaces';

import MoviesView from './component';

const mapStateToProps = (state: ReduxState): object => ({
  movies: state.movies.movies.map((item: MovieItem) => ({
    ...item,
    isFavourite: state.favourites.favourites.some((fav: MovieItem) => fav.imdbID === item.imdbID),
  })),
  fetchFinished: state.movies.finished,
  fetchError: state.movies.error,
  meta: state.movies.meta,
});

export default connect(
  mapStateToProps,
  { fetchMovies, clearMovies },
)(MoviesView);
