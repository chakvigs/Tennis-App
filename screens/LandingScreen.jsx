import * as React from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Linking, Dimensions} from 'react-native'
const screen = Dimensions.get("screen");

export default class LandingScreen extends React.Component {
  render() {
    return(
      <View style = {styles.container}>
        {/*<TextInput  
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
          })}/>*/}
        {/*<Image source = {require('../assets/tennisCourtLogo.png')}/>*/}
        <TouchableOpacity
          onPress = {() => this.props.navigation.navigate('Login')}
          style = {styles.button}
        >
          <Text style = {styles.text}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button}
          onPress = {() => this.props.navigation.navigate('SignUp')}
        >
          <Text style = {styles.text}>Sign Up</Text>
        </TouchableOpacity>
        {/*<TouchableOpacity
          onPress = {() => this.props.navigation.navigate('ForgotPassword')}
        >
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://accounts.google.com/AccountChooser/signinchooser?flowName=GlifWebSignIn&flowEntry=AccountChooser')}>
          <Text style={{color: 'black'}}>
            
            Sign in with Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{color: 'black'}}
            onPress={() => Linking.openURL('https://www.facebook.com/?stype=lo&jlou=Afe4sHy6S38VTLYrtyf8C52HZ9yxppGu0nT4Re9HZTM8xoAEj1lwK0d96MgFXI64-P1N8bzJTcNi5PevzAOeDnMg&smuh=4006&lh=Ac-zjAHN7A0oHm2u9o8')}>
            Sign in with Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress = {() => this.props.navigation.navigate('MapContainer')}
        >
          <Text>Map Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress = {() => this.props.navigation.navigate('CourtsListScreen')}
        >
          <Text>Courts List Screen</Text>
        </TouchableOpacity>*/}
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
    fontSize: 25
  }
})