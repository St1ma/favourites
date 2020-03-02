import React from 'react';
import { View, Image, Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { useTheme } from '@react-navigation/native';

import noImage from '@assets/images/noimage.png';

import stylesGenerator from './styles';

interface MovieItem {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
}

export default ({ data }: { data: MovieItem }) => {
  const styles = stylesGenerator(useTheme().colors);

  return (
    <View style={styles.row}>
      <Image source={{ uri: data.Poster }} style={styles.poster} resizeMode="contain" defaultSource={noImage} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>{data.Title}</Text>
        <Text style={styles.subtitle}>{`Year(s): ${data.Year}`}</Text>
        <Text style={styles.link} onPress={() => WebBrowser.openBrowserAsync(`https://www.imdb.com/title/${data.imdbID}`)}>
          {`https://www.imdb.com/title/${data.imdbID}`}
        </Text>
      </View>
    </View>
  )
};
