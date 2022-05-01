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
        <TextInput  style = {globalStyles.textInput}
          placeholder="Email"
          onChangeText={text => this.setState({
            email:text
          })}/>
        <TextInput 
          style = {globalStyles.textInput}
          secureTextEntry = {true} 
          placeholder="Password"
          onChangeText={text => this.setState({
            password:text
          })}/>

        <TouchableOpacity style = {globalStyles.button}
          onPress = {() => this.logInCallback()}
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
  text: {
    color: 'blue',
  }
})