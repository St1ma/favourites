import * as React from 'react';

import SearchList from '@components/SearchList';

import { MovieItem } from '@constants/iterfaces';

interface Props {
  movies: Array<MovieItem>;
  fetchFinished: boolean;
  fetchError: boolean;
  fetchMovies: Function;
  clearMovies: Function;
  meta: {
    total: number;
    page: number;
  };
}

export default class MoviesScreen extends React.PureComponent<Props> {
  componentWillUnmount(): void {
    const { clearMovies } = this.props;

    clearMovies();
  }

  fetchNextPage = (search: string): void => {
    const {
      meta: { total, page }, movies, fetchMovies, fetchFinished,
    } = this.props;

    if (total > movies.length && fetchFinished) fetchMovies(search, page + 1);
  }


  render(): JSX.Element {
    const {
      movies, fetchMovies, fetchFinished, fetchError,
    } = this.props;

    return (
      <SearchList
        data={movies}
        type="movie"
        onFetchData={fetchMovies}
        onEndReached={this.fetchNextPage}
        loading={!fetchFinished}
        error={fetchError}
      />
    );
  }
}
