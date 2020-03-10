import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { useTheme } from '@react-navigation/native';

import { removeFromFavourites, addToFavourites } from '@store/actions/favourites';

import { WikiItem, MovieItem } from '@constants/interfaces';

import WikiListItem from './WikiListItem';
import MovieListItem from './MovieListItem';
import stylesGenerator from './styles';

const styles = stylesGenerator();

interface Props {
  data: WikiItem|MovieItem;
  type: 'wiki'|'movie';
  addFav: Function;
  removeFav: Function;
}

const ListItem = ({
  data, type, addFav, removeFav,
}: Props): JSX.Element => {
  const listItems = {
    wiki: WikiListItem,
    movie: MovieListItem,
  };
  const Item = listItems[type];

  const onPressIcon = (): void => {
    if (data.isFavourite) {
      removeFav(data, type);
    } else {
      addFav(data, type);
    }
  };

  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Item data={data} />

      <Icon
        name={data.isFavourite ? 'star' : 'star-outlined'}
        type="entypo"
        size={30}
        color={data.isFavourite ? colors.primary : colors.border}
        onPress={onPressIcon}
      />
    </View>
  );
};

export default connect(
  null,
  { addFav: addToFavourites, removeFav: removeFromFavourites },
)(ListItem);
