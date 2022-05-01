import * as React from 'react'
import {Text, View, Stylesheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from './screens/LoginScreen'
import ForgotPasswordScreen from './screens/ForgotPassword'
import SignUpScreen from './screens/SignUpScreen'
import MapContainer from './screens/MapContainer'
import CourtsListScreen from './screens/CourtsListScreen'
import LandingScreen from './screens/LandingScreen'
import HomeScreen from './screens/HomeScreen'
import MainScreen from './screens/MainScreen'

const Stack = createStackNavigator()

export default class App extends React.Component{

  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName = 'Home'
          screenOptions = {{headerShown: false}}
        >
          <Stack.Screen
            name = 'Landing'
            component = {LandingScreen}
          />
          <Stack.Screen
            name = 'Main'
            component = {MainScreen}
          />
          <Stack.Screen
            name = 'Home'
            component = {HomeScreen}
          />
          <Stack.Screen
            name = 'ForgotPassword'
            component = {ForgotPasswordScreen}
          />
          <Stack.Screen
            name = 'Login'
            component = {LoginScreen}
          />
          <Stack.Screen
            name = 'SignUp'
            component = {SignUpScreen}
          />
          <Stack.Screen
            name = 'MapContainer'
            component = {MapContainer}
          />
          <Stack.Screen
            name = 'CourtsList'
            component = {CourtsListScreen}
          />
          
          </Stack.Navigator>
      </NavigationContainer>
    )
  }
}