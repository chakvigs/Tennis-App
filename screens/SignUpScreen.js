import * as React from 'react'
import {View, Text, TouchableOpacity, TextInput} from 'react-native'

export default class SignUpScreen extends React.Component {
  render() {
    return(
      <View>
        <TextInput  
          placeholder="Email"
          /*onChangeText={text => this.setState({
            username:text
          })}*//>

        <TextInput  
          placeholder="Username"
          /*onChangeText={text => this.setState({
            username:text
          })}*//>

        <TextInput
          secureTextEntry = {true}  
          placeholder="Password"
          /*onChangeText={text => this.setState({
            password:text
          })}*//>

        <TextInput
          secureTextEntry = {true}  
          placeholder="Re-enter Password"
          /*onChangeText={text => this.setState({
            password:text
          })}*//>

        <TouchableOpacity
          onPress = {() => this.props.navigation.navigate('Home')}
        >
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    )
  }
}