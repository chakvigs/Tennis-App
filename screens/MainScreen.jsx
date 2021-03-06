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
        <View style = {styles.container}>
            <View style={styles.titleContainer}>
                <Text style={globalStyles.titleText}>
                    Court Selection
                </Text>
            </View>
            
            <View style = {styles.buttonContainer}>
                <TouchableOpacity style = {[globalStyles.button, styles.button]}
                onPress = {() => this.props.navigation.navigate('MapContainer')}>
                    <Text style = {globalStyles.buttonText}>
                        Map
                    </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style = {[globalStyles.button, styles.button]}
                onPress = {() => this.props.navigation.navigate('CourtsList')}>
                    <Text style = {globalStyles.buttonText}>
                        Courts
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {[globalStyles.button, styles.signOutButton]}
                onPress = {() => this.signOutButtonCallback()}>
                    <Text style = {globalStyles.buttonText}>
                        Sign Out
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2D9DD7',
    },

    signOutButton: {
        marginTop: 25,
        backgroundColor: 'red',
    },

    button: {
        marginTop: 10,
    },

    titleContainer: {
        padding: 10,
        flex: 0.1,
        //borderWidth: 2,
        borderColor: 'pink'
    },
    buttonContainer: {
        flex: 0.20,
        //borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white'
    }
})