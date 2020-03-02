import * as React from 'react';
import {
  View, Text, TouchableOpacity, ImageBackground,
} from 'react-native';

import likes from '@assets/images/sections/likes.jpg';
import posters from '@assets/images/sections/posters.jpg';
import wiki from '@assets/images/sections/wiki.jpg';

import styles from './styles';

interface Props {
  navigation: {
    navigate: Function;
  };
}

export default class HomeScreen extends React.PureComponent<Props> {
  handleItemPress = ({ route }: { route: string }): void => {
    const { navigation } = this.props;

    navigation.navigate(route);
  }

  render(): JSX.Element {
    const sections = [
      { label: 'Favourites', route: 'Favourites', image: likes },
      { label: 'IMDb Movies', route: 'Movies', image: posters },
      { label: 'Wiki Images', route: 'Images', image: wiki },
    ];

    return (
      <View style={styles.container}>
        {sections.map((item) => (
          <TouchableOpacity
            key={item.label}
            onPress={(): void => this.handleItemPress(item)}
            style={styles.flex}
          >
            <ImageBackground style={styles.background} source={item.image} resizeMode="cover">
              <View style={styles.section}>
                <Text style={styles.sectionLabel}>{item.label}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
