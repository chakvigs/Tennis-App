import * as React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { Picker } from '@react-native-picker/picker';  // https://github.com/react-native-picker/picker
import { db1 } from '../firebaseConfig';
import { doc, collection, where, query, updateDoc, Timestamp, getDocs } from "firebase/firestore";


import globalStyles from '../styles/index'

export default class ReservingScreen extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            minutes: 0,
            hours: 1,
            id: this.props.route.params.id,
            name: this.props.route.params.name,
            location: this.props.route.params.location
        }

        // console.log("id", this.state.id)
        // console.log("name", this.state.name)
        // console.log("location", this.state.location)
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

    startTimerCallback() {
        this.startTimerHandler()
        this.props.navigation.navigate('CourtsList')
    }

    async startTimerHandler() {
        //console.log(this.state.minutes)
        //console.log(this.state.hours)

        // TODO: check if the selected time is valid/long enough
        let totalTime = (this.state.hours*60)+this.state.minutes
        
        // Query for document name
        const baseRef = collection(db1, "tennisCourts");
        const q = query(baseRef, where("name", "==", this.state.location));
        const querySnapshot = await getDocs(q);
        
        let document_name = ""   
        await querySnapshot.forEach((doc) => {
            document_name = doc.id;
        });

        let firestoreRef = doc(db1, "tennisCourts", document_name);

        let currentTime = Date.now();  // returns integer: milliseconds since Jan 1, 1970
        
        // calculate expiration time by calculating, then adding number of milliseconds
        let expirationTime = currentTime + (this.state.hours*60*60*1000) + (this.state.minutes*60*1000);  // integer

        // NOTE: Could use a Firestore Timestamp object, but it is complicated
        // let expirationTimestamp = Timestamp.fromDate(new Date(expirationTime));
        const courtID = "courts." + this.state.id + ".expirationTime"
        await updateDoc(firestoreRef, { [courtID] : expirationTime })
            .then(() => {
                console.log(`Successfully updated item: ${document_name}`);
            })
            .catch((err) => {
                console.log(`Error updating item: ${document_name}, ${err}`);
            })  
    }

    render(){
        return(
        <View style = {styles.container}>
            <Text style = {styles.text}>
                How long will you use the court?
            </Text>
            <View style = {styles.timerContainer}>
                <View style = {styles.pickerContainer}>
                    <Picker 
                        style = {styles.picker}
                        selectedValue={this.state.hours}
                        onValueChange={(itemValue, itemIndex) => this.updateHrs(itemValue)}>
                        <Picker.Item label="1" value={1} />
                        <Picker.Item label="2" value={2}/>
                        <Picker.Item label="3" value={3}/>
                        <Picker.Item label="4" value={4}/>
                    </Picker>
                    <Text style = {styles.text}>
                        hrs
                    </Text>
                </View>
                
                <View style = {styles.pickerContainer}>
                    <Picker
                        style = {styles.picker}
                        selectedValue={this.state.minutes}
                        onValueChange={(itemValue, itemIndex) => this.updateMin(itemValue)}>
                        <Picker.Item label="0" value={0} />
                        <Picker.Item label="5" value={5} />
                        <Picker.Item label="10" value={10} />
                        <Picker.Item label="15" value={15} />    
                        <Picker.Item label="20" value={20} />
                        <Picker.Item label="25" value={25} />
                        <Picker.Item label="30" value={30} />
                        <Picker.Item label="35" value={35}/>
                        <Picker.Item label="40" value={40}/>
                        <Picker.Item label="45" value={45}/>
                        <Picker.Item label="50" value={50}/>
                        <Picker.Item label="55" value={55}/>
                    </Picker>
                    <Text style = {styles.text}>mins</Text>
               </View>
            </View>
            <TouchableOpacity 
            onPress = {() => this.startTimerCallback()} 
            style = {globalStyles.button}>
                <Text>
                    Start Timer
                </Text>
            </TouchableOpacity>
        </View>)
    }
}
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 20
    },
    picker: {
        width: screenWidth/3,
        height: screenHeight/3,
    },
    timerContainer: {
        flexDirection: 'row',
  
    },
    pickerContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})