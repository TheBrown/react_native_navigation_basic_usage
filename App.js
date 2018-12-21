/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './src/screens/HomScreen';
import DetailScreen from './src/screens/DetailScreen';

const AppContainer = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailScreen
  }
}, 
{
  initialRouteName: 'Home'
})

export default createAppContainer(AppContainer);
