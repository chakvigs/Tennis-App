import * as React from 'react'
import {View, Text, TouchableOpacity, Dimensions, StyleSheet, TextInput} from 'react-native'
import globalStyles from '../styles';
import { logIn } from '../utils/authentication';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  async logInCallback() {
    let result = await logIn(this.state.email, this.state.password);
    // TODO: different action if failing or succeeding

    if (result.user) {
      // we have userCredential.user
    } else {
      // must be an error
      // const errorCode = result.code;
      // const errorMessage = result.message;
      this.setState({ error: result.message });

      // TODO: check error code and display a better message depending on the code
    }
  }

  render(){
    return (
      <View style = {styles.container}>
        <View>
          <Text style={styles.error}>
            {this.state.error}
          </Text>
        </View>

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
            onPress={() => this.logInCallback()}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>

        <View style = {styles.forgotPassContainer}>
          <TouchableOpacity onPress = {() => this.props.navigation.navigate('ForgotPassword')}>
            <Text style = {styles.text}>Forgot Password?</Text>
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
  error: {
    color: 'red',
    marginVertical: 5,
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