import * as React from 'react';
import { View, Text, SectionList } from 'react-native';

import ListItem from '@components/ListItem';
import { EmptyPlaceholder } from '@components/Placeholder'

import { WikiItem, MovieItem } from '@constants/interfaces';

import styles from './styles';

interface Props {
  images: Array<WikiItem>;
  movies: Array<MovieItem>;
  removeFromFavourites: Function;
}

export default class HomeScreen extends React.PureComponent<Props> {
  renderItem = ({ item }): JSX.Element => {
    const { removeFromFavourites } = this.props;

    return (
      <ListItem
        type={item.type}
        data={{ ...item, isFavourite: true }}
        onPress={(): void => removeFromFavourites(item, item.type)}
      />
    );
  }

  render(): JSX.Element {
    const { images, movies } = this.props;

    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            images.length && { title: 'Wiki Images', data: images },
            movies.length && { title: 'IMDb Movies', data: movies },
          ].filter(Boolean)}
          keyExtractor={(item): string => item.imdbID || item.name}
          ListEmptyComponent={(): JSX.Element => <EmptyPlaceholder label="Your favourite list is empty now" initial />}
          renderItem={this.renderItem}
          renderSectionHeader={({ section: { title } }): JSX.Element => (
            <Text style={styles.section}>{title}</Text>
          )}
        />
      </View>
    );
  }
}
