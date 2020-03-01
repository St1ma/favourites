import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';

interface Props {
  onPress: Function;
}

export default ({ onPress }: Props) => (
  <View style={styles.container}>
    <Icon name="bug" type="entypo" size={40} color="rgba(0,0,0,0.5)" />
    <Text style={styles.title}>Oops!</Text>
    <Text style={styles.subtitle}>Something went wrong</Text>

    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonLabel}>Retry</Text>
    </TouchableOpacity>
  </View>
);
