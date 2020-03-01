import * as React from 'react';
import {
  Image, ActivityIndicator, View, Text, FlatList, TextInput,
} from 'react-native';

import ListItem from '../../components/ListItem';
import SearchList from '../../components/SearchList';

import styles from './styles';

interface MovieItem {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
  isFavourite?: boolean;
}

interface Props {
  movies: Array<MovieItem>;
  fetchFinished: boolean;
  fetchError: boolean;
  fetchMovies: Function;
  clearMovies: Function;
  meta: {
    total: number;
    page: number;
  }
}

export default class MoviesScreen extends React.PureComponent<Props> {
  fetchNextPage = (search: string) => {
    const { meta: { total, page }, movies, fetchMovies } = this.props;

    if (total > movies.length && this.props.fetchFinished) fetchMovies(search, page + 1);
  }

  componentWillUnmount() {
    this.props.clearMovies();
  }

  render() {
    return (
      <SearchList
        data={this.props.movies}
        type="movie"
        onFetchData={this.props.fetchMovies}
        onEndReached={this.fetchNextPage}
        loading={!this.props.fetchFinished}
        error={this.props.fetchError}
      />
    );
  }
}
