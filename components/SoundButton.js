import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import db from "../config";

class SoundButton extends React.Component {
   zuada = async () => {
     await Audio.Sound.createAsync(
       {uri:'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
       {shouldPlay: true}
     )
  }

  timerButton(color){
    var instantTimeButton = new Date().getTime();
    var time =  db.ref("Teams/"+color+"/").update({
      isPressed: true,
      time: instantTimeButton
    });
  }

  render() {
    return (
      <TouchableOpacity style={[styles.button, {backgroundColor:this.props.color}]}
      onPress={() => {
                      var color = this.props.color;
                      this.zuada();
                      this.timerButton(color);}}>
        <Text style={styles.text}>Aperte-me se for capaz!</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    alignSelf:"center",
    width: 170,
    height:170,
    justifyContent:"center",
    borderRadius:100,
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

export default SoundButton;