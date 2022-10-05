import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import ButtonScreen from "./screens/ButtonScreen";
import HomeScreen from "./screens/HomeScreen";
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>        
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  ButtonScreen: ButtonScreen
})

const AppContainer = createAppContainer(AppNavigator);