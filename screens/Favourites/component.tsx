import * as React from 'react';
import { View, Text, SectionList } from 'react-native';

import ListItem from '@components/ListItem';

import { WikiItem, MovieItem } from '@constants/interfaces';

import styles from './styles';

interface Props {
  images: Array<WikiItem>;
  movies: Array<MovieItem>;
  removeFromFavourites: Function;
}

export default class HomeScreen extends React.PureComponent<Props> {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            this.props.images.length && { title: 'Wiki Images', data: this.props.images },
            this.props.movies.length && { title: 'IMDb Movies', data: this.props.movies }
          ].filter(Boolean)}
          keyExtractor={(item) => item.imdbID || item.name}
          ListEmptyComponent={() => <Text>Please add smth to favourites</Text>}
          renderItem={({ item }) => <ListItem type={item.type} data={{ ...item, isFavourite: true }} onPress={() => this.props.removeFromFavourites(item, item.type)} />}
          renderSectionHeader={({ section: { title } }) =><Text style={styles.section}>{title}</Text>}
        />
      </View>
    );
  }
}
