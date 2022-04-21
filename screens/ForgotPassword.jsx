import * as React from 'react'
import  {View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions} from 'react-native'
const screen = Dimensions.get("screen");

export default class ForgotPassword extends React.Component {
  render() {
    return(
      <View style = {styles.container}>
        <TextInput  
          placeholder="Email"
          /*onChangeText={text => this.setState({
            username:text
          })}*//>
        <TouchableOpacity style = {styles.button}>
          <Text>Send Email</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'gray',
    width: screen.width/3,
    alignItems: 'center',
    justifyContent: 'center',
  },
})