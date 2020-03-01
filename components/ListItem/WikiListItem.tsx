import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

interface WikiItem {
  name: string;
  url: string;
  user: string;
}

export default ({ data }: { data: WikiItem }) => (
  <View style={styles.row}>
    <Image source={{ uri: data.url }} style={styles.image} resizeMode="contain" />
    <View style={styles.info}>
      <Text style={styles.title} numberOfLines={2}>{data.name}</Text>
      <Text style={styles.subtitle}>{`Owner: ${data.user}`}</Text>
    </View>
  </View>
);
