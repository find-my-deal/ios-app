import Exponent from 'exponent';
import React from 'react';
import {
  AppRegistry,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import {
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';
import {
  FontAwesome,
} from '@exponent/vector-icons';

import Router from './navigation/Router';
import cacheAssetsAsync from './utilities/cacheAssetsAsync';

class AppContainer extends React.Component {
  state = {
    appIsReady: false,
    userIsLoggedIn: false,
  }

  componentWillMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [
          require('./assets/images/exponent-wordmark.png'),
        ],
        fonts: [
          FontAwesome.font,
          {'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')},
        ],
      });
    } catch(e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
        'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
      this.setState({appIsReady: true});
    }
  }

  onButtonPress() {
    console.log("Log in pressed");
    this.setState({userIsLoggedIn: true})
  }

  render() {
    if (this.state.appIsReady && this.state.userIsLoggedIn) {
      return (
        <View style={styles.container}>
          <NavigationProvider router={Router}>
            <StackNavigation id="root" initialRoute={Router.getRoute('rootNavigation')} />
          </NavigationProvider>

          <StatusBar barStyle="default" />

        </View>
      )

    } else if (this.state.appIsReady) {
    return (
      <View style={styles.container}>

        <TouchableHighlight
          style={styles.logInButton}
          onPress={this.onButtonPress.bind(this)}>
          <Text style={styles.logInText}>
            Log in
          </Text>
        </TouchableHighlight>
      </View>
    );
    } else {
      return (
        <Exponent.Components.AppLoading />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  logInButton: {
    height: 50,
    width: 200,
    backgroundColor: '#333',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logInText: {
    color: '#fff',
  }
});

Exponent.registerRootComponent(AppContainer);
