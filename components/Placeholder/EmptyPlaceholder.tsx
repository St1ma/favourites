import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';

export default ({ initial, label }: { initial: boolean; label?: string }): JSX.Element => (
  <View style={styles.container}>
    <Icon name={initial ? 'dots-three-horizontal' : 'image'} type="entypo" size={40} color="rgba(0,0,0,0.5)" />
    {initial
      ? <Text style={styles.subtitle}>{label || 'Please, enter something to search field'}</Text>
      : (
        <>
          <Text style={styles.title}>So pity!</Text>
          <Text style={styles.subtitle}>No matchings found...</Text>
          <Text style={styles.subtitle}>Please, try to rewrite your search text</Text>
        </>
      )}
  </View>
);
