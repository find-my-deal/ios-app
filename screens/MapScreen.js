import React from 'react';
import {
  View,
  Text,
  MapView,
  StyleSheet,
} from 'react-native';
import { Components } from 'exponent';

export default class MapScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Map',
    },
  }

  render() {
    return (
      <View
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

        <Components.MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: -36.8485,
          longitude: 174.7633,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
