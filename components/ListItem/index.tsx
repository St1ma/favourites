import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import { removeFromFavourites, addToFavourites } from '../../redux/actions/favourites';

import WikiListItem from './WikiListItem';
import MovieListItem from './MovieListItem';
import styles from './styles';

interface WikiItem {
  name: string;
  url: string;
  user: string;
  isFavourite?: boolean;
  type?: 'wiki';
}

interface MovieItem {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
  isFavourite?: boolean;
  type?: 'movie';
}

interface Props {
  data: WikiItem|MovieItem;
  type: 'wiki'|'movie',
  addToFavourites: Function;
  removeFromFavourites: Function;
}

const ListItem = ({ data, type, addToFavourites, removeFromFavourites }: Props) => {
  const listItems = {
    wiki: WikiListItem,
    movie: MovieListItem,
  };
  const ListItem = listItems[type];

  const onPressIcon = () => {
    if (data.isFavourite) {
      removeFromFavourites(data, type);
    } else {
      addToFavourites(data, type);
    }
  }

  return (
    <View style={styles.container}>
      <ListItem data={data} />

      <Icon
        name={data.isFavourite ? "star" : "star-outlined"}
        type="entypo"
        size={30}
        color="grey"
        onPress={onPressIcon}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies.map((item) => ({ ...item, isFavourite: state.favourites.favourites.some((fav) => fav.imdbID === item.imdbID) })),
  fetchFinished: state.movies.finished,
  fetchError: state.movies.error,
  meta: state.movies.meta,
});

export default connect(
  null,
  { addToFavourites, removeFromFavourites },
)(ListItem);
