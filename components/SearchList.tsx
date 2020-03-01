import React, { useState, useCallback } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, ActivityIndicator } from 'react-native';
import debounce from 'lodash/debounce';

import ListItem from './ListItem';
import { EmptyPlaceholder, ErrorPlaceholder } from './Placeholder';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  search: {
    margin: 16,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    fontSize: 18,
  }
});

interface WikiItem {
  name: string;
  url: string;
  user: string;
  isFavourite?: boolean;
}

interface MovieItem {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
  isFavourite?: boolean;
}

interface Props {
  data: Array<WikiItem>|Array<MovieItem>;
  type: 'wiki'|'movie';
  onFetchData: Function;
  onEndReached: Function;
  loading: Boolean;
  error: Boolean;
}

export default ({ data, type, onFetchData, onEndReached, loading, error }: Props) => {
  const [search, setSearch] = useState('');
  const [initialEmpty, setInitialEmpty] = useState(true);

  const toggleFavourite = (item: WikiItem) => {
    if (item.isFavourite) {
      this.props.removeFromFavourites(item, type);
    } else {
      this.props.addToFavourites(item, type)
    }
  }

  const fetchData = useCallback(debounce((newSearch: string) => {
    if (newSearch.length >= 3) onFetchData(newSearch);
    setInitialEmpty(false);
  }, 600), []);

  const handleChangeText = (newSearch: string) => {
    setSearch(newSearch);
    fetchData(newSearch);
  }

  const placeholder = error ? <ErrorPlaceholder onPress={() => fetchData(search)} /> : <EmptyPlaceholder initial={initialEmpty} />;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        value={search}
        onChangeText={handleChangeText}
        style={styles.search}
      />
      <FlatList
        keyExtractor={(item) => item.imdbID || item.name}
        data={data}
        renderItem={({ item }) => <ListItem data={item} type={type} onPress={() => {}} />}
        ListEmptyComponent={() => loading ? <ActivityIndicator /> : placeholder}
        ListFooterComponent={() => loading && !!data.length && <ActivityIndicator />}
        onEndReached={() => onEndReached(search)}
      />
    </View>
  )
}
