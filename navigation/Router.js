import {
  createRouter,
} from '@exponent/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import MenuScreen from '../screens/MenuScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  home: () => HomeScreen,
  map: () => MapScreen,
  menu: () => MenuScreen,
  rootNavigation: () => RootNavigation,
}));
