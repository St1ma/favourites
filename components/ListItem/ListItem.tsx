import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { useTheme } from '@react-navigation/native';

import { removeFromFavourites, addToFavourites } from '@redux/actions/favourites';

import { WikiItem, MovieItem } from '@constants/interfaces';

import WikiListItem from './WikiListItem';
import MovieListItem from './MovieListItem';
import stylesGenerator from './styles';

const styles = stylesGenerator();

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

  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <ListItem data={data} />

      <Icon
        name={data.isFavourite ? "star" : "star-outlined"}
        type="entypo"
        size={30}
        color={data.isFavourite ? colors.primary : colors.border}
        onPress={onPressIcon}
      />
    </View>
  );
};

const mapStateToProps = (state: object) => ({
  movies: state.movies.movies.map((item: MovieItem) => ({ ...item, isFavourite: state.favourites.favourites.some((fav: MovieItem) => fav.imdbID === item.imdbID) })),
  fetchFinished: state.movies.finished,
  fetchError: state.movies.error,
  meta: state.movies.meta,
});

export default connect(
  null,
  { addToFavourites, removeFromFavourites },
)(ListItem);
