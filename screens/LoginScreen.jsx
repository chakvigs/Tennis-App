import * as React from 'react'
import {View, Text, TouchableOpacity, Dimensions, StyleSheet, TextInput} from 'react-native'
import globalStyles from '../styles';
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
        <TextInput  style = {globalStyles.textInput}
          placeholder="Email"
          onChangeText={text => this.setState({
            username:text
          })}/>
        <TextInput 
          style = {globalStyles.textInput}
          secureTextEntry = {true} 
          placeholder="Password"
          onChangeText={text => this.setState({
            password:text
          })}/>

        <TouchableOpacity style = {globalStyles.button}
          onPress = {() => this.props.navigation.navigate('Home')}
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