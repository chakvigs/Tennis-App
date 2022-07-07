import * as React from 'react'
import {View, Text, TouchableOpacity, Dimensions, StyleSheet, TextInput} from 'react-native'
import globalStyles from '../styles';
import { logIn, authStateListener } from '../utils/authentication';
export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  async logInCallback() {
    await logIn(this.state.email, this.state.password)  // failing, or succeeding
  }

  render(){
    return(
      <View style = {styles.container}>
        <View style = {styles.textInputContainer}>
          <TextInput  style = {globalStyles.textInput}
            placeholder="Email"
            placeholderTextColor={'#dbd9d9'}
            onChangeText={text => this.setState({
              email:text
            })}/>
          <TextInput 
            style = {globalStyles.textInput}
            secureTextEntry = {true} 
            placeholder="Password"
            placeholderTextColor={'#dbd9d9'}
            onChangeText={text => this.setState({
              password:text
            })}/>
        </View>

        <View style = {styles.buttonContainer}>
          <TouchableOpacity style = {globalStyles.button}
            onPress = {() => this.logInCallback()}>
            <Text style = {styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>

        <View style = {styles.forgotPassContainer}>
          <TouchableOpacity onPress = {() => this.props.navigation.navigate('ForgotPassword')}>
            <Text style = {styles.text}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2D9DD7'
  },
  text: {
    color: '#F9F9F9',
    textDecorationLine: 'underline'
  },

  buttonText: {
    fontSize: 18,
    color: '#F9F9F9'
  },

  buttonContainer: {
    marginTop: 10
  },

  forgotPassContainer: {
    marginTop: 10
  },
})