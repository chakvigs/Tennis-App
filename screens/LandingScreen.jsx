import * as React from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Linking, Dimensions} from 'react-native'

const screen = Dimensions.get("screen");

export default class LandingScreen extends React.Component {
  constructor(props) {
    super(props)
  }

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
        <View style={styles.imageContainer}>
          <Image style = {styles.logoImage} source = {require('../assets/tennisCourtLogo.png')}/>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            Tennis App
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}
            style={styles.button}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.button}
            onPress = {() => this.props.navigation.navigate('SignUp')}>
            <Text style = {styles.buttonText}>Sign Up</Text>
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
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#6FC34A',
    width: screen.width/3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#F9F9F9'
  },

  buttonText: {
    fontSize: 18,
    color: '#F9F9F9'
  },

  imageContainer: {
    marginBottom: 30
  },
  logoImage: {
    width: screen.width/2,
    aspectRatio: 1,
    height: undefined
  },
  titleContainer: {
    padding:10
  },
  buttonContainer: {
    marginBottom: 50
  }
})