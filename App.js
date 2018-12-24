/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./src/screens/HomScreen";
import DetailScreen from "./src/screens/DetailScreen";
import HeaderInteracting from './src/screens/HeaderInteracting';

const AppContainer = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailScreen
    },
    HeaderInteracting: {
      screen: HeaderInteracting
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default createAppContainer(AppContainer);
