import * as React from 'react'
import {View, TouchableOpacity, Text, Dimensions, StyleSheet} from 'react-native'
import globalStyles from '../styles'
const screen = Dimensions.get("screen");
import {signOutFunction} from '../utils/authentication'

export default class HomeScreen extends React.Component{
    constructor(props){
        super(props)
    }

    async signOutButtonCallback() {
        await signOutFunction()  // failing, or succeeding
    }

    render() {
        return(
        <View style = {{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <TouchableOpacity style = {globalStyles.button}
            onPress = {() => this.props.navigation.navigate('MapContainer')}>
                <Text style = {globalStyles.text}>
                    Map View
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {globalStyles.button}
            onPress = {() => this.props.navigation.navigate('CourtsList')}>
                <Text style = {globalStyles.text}>
                    List View
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button}
            onPress = {() => this.signOutButtonCallback()}>
                <Text>
                    Sign out
                </Text>
            </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: 'gray',
        width: screen.width/3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
      },
})