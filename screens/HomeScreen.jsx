import * as React from 'react'
import {View, TouchableOpacity, Text, Dimensions} from 'react-native'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from "../firebaseConfig"

export default class HomeScreen extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            this.props.navigation.navigate('Main')
          } else {
              this.props.navigation.navigate('Landing')
          }
        })
      }

    render() {
        return(<View></View>)
    }
}