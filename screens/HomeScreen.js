import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Title from "../components/Title";

export default class HomeScreen extends React.Component{

  navigation = (buttonColor) => {
    this.props.navigation.navigate("ButtonScreen", {color: buttonColor});
  }

  render(){
    return(
      <View>
        <Title/>
        <TouchableOpacity style={[styles.button, {backgroundColor: "cyan"}]}
        onPress={() => this.navigation("cyan")}>
          <Text style={styles.text}>DIAMANTE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, {backgroundColor: "red"}]}
        onPress={() => this.navigation("red")}>
          <Text style={styles.text}>RUBI</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, {backgroundColor: "lightgreen"}]}
        onPress={() => this.navigation("lightgreen")}>
          <Text style={styles.text}>ESMERALDA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, {backgroundColor: "lightgray"}]}
        onPress={() => this.navigation("lightgray")}>
          <Text style={styles.text}>PÉROLA</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button:{
    marginTop:20,
    alignSelf:"center",
    width:170,
    height:50,
    justifyContent:"center",
    borderRadius:15,
    borderWidth:4,
    borderColor:"black"
  },
  text: {
 textAlign:"center",
    fontSize:18,
    fontWeight:"bold",
    color:"black",
    fontFamily:"monospace",
    padding: 5
  }
})