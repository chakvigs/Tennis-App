import * as React from 'react'
import  {View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions, Alert} from 'react-native'
const screen = Dimensions.get("screen");
import globalStyles from '../styles/index'
import { forgotPasswordFunction } from '../utils/authentication';

export default class ForgotPassword extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: ""
    }
  }

  createTwoButtonAlert = () =>
    Alert.alert(
      "Notice:",
      "Your Email has been sent",
      [
        { text: "OK", onPress: () => {this.props.navigation.navigate('Landing')} }
      ]
    );

    forgotPasswordFunctionCallback(){
      forgotPasswordFunction(this.state.email)
      this.createTwoButtonAlert()
    }

  render() {
    return(
      <View style = {styles.container}>
        <TextInput style = {globalStyles.textInput}
          placeholder="Email"
          onChangeText={text => this.setState({
            email:text
          })}/>
        <TouchableOpacity style = {globalStyles.button}
        onPress = {() => this.forgotPasswordFunctionCallback()}>
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
})