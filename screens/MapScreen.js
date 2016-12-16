import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

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

        <Text>
          Here will be a map view
        </Text>

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
