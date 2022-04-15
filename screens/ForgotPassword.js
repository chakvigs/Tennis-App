import * as React from 'react'
import  {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native'

export default class ForgotPassword extends React.Component {
  render() {
    return(
      <View>
        <TextInput  
          placeholder="Email"
          /*onChangeText={text => this.setState({
            username:text
          })}*//>
        <TouchableOpacity>
          <Text>Send Email</Text>
        </TouchableOpacity>
      </View>
    )
  }
}