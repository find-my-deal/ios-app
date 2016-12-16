import React from 'react';
import {
  Image,
  Linking,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      title: "Home",
    },
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeHeading}>
            Find my Deal home screen
          </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeHeading: {
    width: 200,
    height: 34.5,
    marginTop: 3,
  },
});
