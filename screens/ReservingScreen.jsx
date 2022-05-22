import * as React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {Picker} from '@react-native-picker/picker';  // https://github.com/react-native-picker/picker

import globalStyles from '../styles/index'

export default class ReservingScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            minutes: 0,
            hours:0
        }
    }

    updateMin(itemValue){
        this.setState({
            minutes: itemValue
        })
    }

    updateHrs(itemValue){
        this.setState({
            hours: itemValue
        })
    }

    render(){
        return(
        <View style = {styles.container}>
            <Text style = {styles.text}>
                How long will you use the court?
            </Text>
            <Picker
                selectedValue={this.state.minutes}
                onValueChange={(itemValue, itemIndex) => this.updateMin(itemValue)}>
                <Picker.Item label="30" value={30} />
                <Picker.Item label="35" value={35}/>
                <Picker.Item label="40" value={40}/>
                <Picker.Item label="45" value={45}/>
                <Picker.Item label="50" value={50}/>
                <Picker.Item label="55" value={55}/>
            </Picker>
            <Picker
                selectedValue={this.state.hours}
                onValueChange={(itemValue, itemIndex) => this.updateHrs(itemValue)}>
                <Picker.Item label="1" value={1} />
                <Picker.Item label="2" value={2}/>
                <Picker.Item label="3" value={3}/>
                <Picker.Item label="4" value={4}/>
            </Picker>
            <TouchableOpacity style = {globalStyles.button}>
                <Text>
                    Start Timer
                </Text>
            </TouchableOpacity>
        </View>)
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 20
    }
})