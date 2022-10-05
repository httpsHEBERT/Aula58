import * as React from "react";
import  { Text, View, StyleSheet } from 'react-native';

class Title extends React.Component {
  render() {
    return(
      <View style={styles.view}>
        <Text style={styles.text}>Aperte ou Perde</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view:{
    marginBottom:40,
    alignSelf:"center",
    marginTop:50,
    backgroundColor: "brown",
    paddingVertical: 7,
    borderRadius: 15,
    width:"90%",
    borderWidth:3
  },

  text:{
    fontSize:30,
    color: "#FFF",
    textAlign:"center",
    fontFamily:"monospace",
    fontWeight:"bold",
    paddingHorizontal: 5
  }
})

export default Title;