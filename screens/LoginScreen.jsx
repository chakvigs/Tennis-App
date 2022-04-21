import * as React from 'react'
import {View, Text, TouchableOpacity, Dimensions, StyleSheet, TextInput} from 'react-native'
const screen = Dimensions.get("screen");

export default class LoginScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  render(){
    return(
      <View style = {styles.container}>
        <TextInput  
          placeholder="Email"
          onChangeText={text => this.setState({
            username:text
          })}/>
        <TextInput
          style = {{}}
          secureTextEntry = {true} 
          placeholder="Password"
          onChangeText={text => this.setState({
            password:text
          })}/>

        <TouchableOpacity
          onPress = {() => this.props.navigation.navigate('Home')}
          style = {styles.button}
        >
          <Text>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => this.props.navigation.navigate('ForgotPassword')}>
          <Text style = {styles.text}>
            Forgot Password?
          </Text>
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
    marginTop: 10,
    padding: 10,
    backgroundColor: 'gray',
    width: screen.width/3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'blue'
  }
})