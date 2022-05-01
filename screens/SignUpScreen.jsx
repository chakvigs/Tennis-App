import * as React from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions} from 'react-native'
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
      rePassword: ''
    }
  }

  async signUpButtonCallback() {
    await signUp(this.state.firstName, this.state.lastName, this.state.email, this.state.password, this.state.rePassword) ;  // parameters for signUp?
    this.props.navigation.navigate('MapContainer')
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