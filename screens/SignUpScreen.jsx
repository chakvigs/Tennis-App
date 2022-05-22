import * as React from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions, Alert} from 'react-native'
import { retrySymbolicateLogNow } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import globalStyles from '../styles/index';
import { signUp } from '../utils/authentication';

const screen = Dimensions.get("screen");
export default class SignUpScreen extends React.Component {
  constructor(props){
    super(props);  // calls the parent class' constructor
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
      alertMessage: '',
    }
  }

  // checkIfValid()
  preValidation() {
    
    if(this.state.firstName === '') {
      Alert.alert(
        "Notice:",
        'Please enter your first name',
        [
          { text: "OK"}
        ]
      );
      return false
    }
    else if(this.state.lastName === '') {
        Alert.alert(
          "Notice:",
          'Please enter your last name',
          [
            { text: "OK"}
          ]
        );
      return false
    }
    else if(this.state.email === '') {
      Alert.alert(
        "Notice:",
        'Please enter your email',
        [
          { text: "OK"}
        ]
      );
      return false
    }
    else if(this.state.password === '') {
      Alert.alert(
        "Notice:",
        'Please enter your password',
        [
          { text: "OK"}
        ]
      );
      return false
    }
    else if(this.state.password !== this.state.password2) {
      Alert.alert(
        "Notice:",
        "Your passwords don't match",
        [
          { text: "OK"}
        ]
      );
      return false
    }
    else{
      return true
    }

    // return true or false
  }

  async signUpButtonCallback() {
    if(this.preValidation() === true) {
      await signUp(this.state.firstName, this.state.lastName, this.state.email, this.state.password, this.state.password2) ;  // parameters for signUp?
    }
  }
    
  
  render() {
    return(
      <View style = {styles.container}>
        <TextInput  style = {globalStyles.textInput}
          placeholder="First Name"
          onChangeText={text => this.setState({
            firstName:text
          })}/>
        <TextInput style = {globalStyles.textInput}
          placeholder="Last Name"
          onChangeText={text => this.setState({
            lastName:text
          })}/>
        <TextInput  style = {globalStyles.textInput}
          placeholder="Email"
          onChangeText={text => this.setState({
            email:text
          })}/>
        <TextInput style = {globalStyles.textInput}
          secureTextEntry = {true}  
          placeholder="Password"
          onChangeText={text => this.setState({
            password:text
          })}/>

        <TextInput style = {globalStyles.textInput}
          secureTextEntry = {true}  
          placeholder="Re-enter Password"
          onChangeText={text => this.setState({
            password2:text
          })}/>

        <TouchableOpacity style = {globalStyles.button}
          onPress ={() => this.signUpButtonCallback()}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})