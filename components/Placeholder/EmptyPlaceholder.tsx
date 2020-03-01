import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';

export default ({ initial }: { initial: Boolean }) => (
  <View style={styles.container}>
    <Icon name={initial ? 'dots-three-horizontal' : 'image'} type="entypo" size={40} color="rgba(0,0,0,0.5)" />
    {initial
      ? <Text style={styles.subtitle}>Please, enter something to search field</Text>
      : (
        <>
          <Text style={styles.title}>So pitty!</Text>
          <Text style={styles.subtitle}>Seems like we have no idea what you are looking for...</Text>
          <Text style={styles.subtitle}>Please, try to reenter your search</Text>
        </>
      )}
  </View>
);
