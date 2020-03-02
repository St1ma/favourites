import React, { useState, useCallback } from 'react';
import {
  View, TextInput, FlatList, StyleSheet, ActivityIndicator,
} from 'react-native';
import debounce from 'lodash/debounce';

import { WikiItem, MovieItem } from '@constants/interfaces';

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
    borderBottomColor: '#C9C9C9',
    fontSize: 18,
  },
});

interface Props {
  data: Array<WikiItem>|Array<MovieItem>;
  type: 'wiki'|'movie';
  onFetchData: Function;
  onEndReached: Function;
  loading: boolean;
  error: boolean;
}

export default ({
  data, type, onFetchData, onEndReached, loading, error,
}: Props): JSX.Element => {
  const [search, setSearch] = useState('');
  const [initialEmpty, setInitialEmpty] = useState(true);

  const fetchData = useCallback(debounce((newSearch: string) => {
    if (newSearch.length >= 3) {
      onFetchData(newSearch);
      setInitialEmpty(false);
    }
  }, 600), []);

  const handleChangeText = (newSearch: string): void => {
    setSearch(newSearch);
    fetchData(newSearch);
  };

  const placeholder = error
    ? <ErrorPlaceholder onPress={(): void => fetchData(search)} />
    : <EmptyPlaceholder initial={initialEmpty} />;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        value={search}
        onChangeText={handleChangeText}
        style={styles.search}
      />
      <FlatList
        keyExtractor={(item): string => item.imdbID || item.name}
        data={data}
        renderItem={({ item }): JSX.Element => <ListItem data={item} type={type} />}
        ListEmptyComponent={(): JSX.Element => (loading ? <ActivityIndicator /> : placeholder)}
        ListFooterComponent={(): JSX.Element => loading && !!data.length && <ActivityIndicator />}
        onEndReached={(): void => onEndReached(search)}
        keyboardShouldPersistTaps="always"
      />
    </View>
  );
};
