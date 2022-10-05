import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Title from "../components/Title";
import SoundButton from "../components/SoundButton";

export default class ButtonScreen extends React.Component {
  render(){
    return(
      <View>
        <Title/>
        <SoundButton color={this.props.navigation.getParam("color")}/>
      </View>
    )
  }
}