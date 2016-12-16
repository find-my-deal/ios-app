import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class MenuScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Menu'
    },
  }

  render() {
    return (
      <View
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

        <Text>
          Here is the menu tab
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
