import * as React from 'react'
import {Text, View, Stylesheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from './screens/LoginScreen'
import ForgotPasswordScreen from './screens/ForgotPassword'
import SignUpScreen from './screens/SignUpScreen'
import MapContainer from './screens/MapContainer'
import CourtsListScreen from './screens/CourtsListScreen'



const Stack = createStackNavigator()
function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName = 'Home'
        screenOptions = {{headerShown: false}}
      >
        <Stack.Screen
          name = 'Home'
          component = {LoginScreen}
        />
        <Stack.Screen
          name = 'ForgotPassword'
          component = {ForgotPasswordScreen}
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
          name = 'CourtsListScreen'
          component = {CourtsListScreen}
        />
        
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App