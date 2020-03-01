import * as React from 'react';
import {
  View, Text, TouchableOpacity, ImageBackground,
} from 'react-native';

import likes from '../../assets/images/sections/likes.jpg';
import posters from '../../assets/images/sections/posters.jpg';
import wiki from '../../assets/images/sections/wiki.jpg';

import styles from './styles';

interface User {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
}

interface Props {
  users: Array<User>;
  fetchUsers: Function;
  fetchFinished: boolean;
  fetchError: boolean;
  navigation: {
    navigate: Function;
  };
}

interface State {
  refreshing: boolean;
  pageLoading: boolean;
}

export default class HomeScreen extends React.PureComponent<Props, State> {
  render() {
    const sections = [
      { label: 'Favourites', route: 'Favourites', image: likes },
      { label: 'IMDb Movies', route: 'Movies', image: posters },
      { label: 'Wiki Images', route: 'Images', image: wiki },
    ]
    return (
      <View style={styles.container}>
        {sections.map((item) => (
          <TouchableOpacity onPress={() => this.props.navigation.navigate(item.route)} style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} source={item.image} resizeMode="contain">
              <View style={{ backgroundColor: 'rgba(255,255,255,0.85)', width: '60%', justifyContent: 'center', padding: 16, borderRadius: 16, flexDirection: 'row', alignItems: 'center', }}>
                <Text style={{ marginLeft: 16, fontSize: 24 }}>{item.label}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
