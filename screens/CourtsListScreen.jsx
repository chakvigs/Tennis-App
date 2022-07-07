import React from 'react';
import { Ionicons } from '@expo/vector-icons'
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { collection, addDoc, doc, getDocs, onSnapshot, query } from "firebase/firestore"; 

import * as data from '../courts';
import { db1 } from '../firebaseConfig'
import { TouchableOpacity } from 'react-native-gesture-handler';
import globalStyles from '../styles';

const writeData = async() => {
  try {
    // Currently: we add the tennisCourts data as one whole object with an id key that is automatically generated
    for (let courtName of Object.keys(data)) {
      let docRef = await addDoc(collection(db1, "tennisCourts"), data[courtName]);
      //console.log("Document written with ID: ", docRef.id);
    }

    // What we would rather do: access the tennisCourts collection 
    // Loop through the data in our courts.json and add each court as a document one by one onto the tennisCourts
    // tennisCourts : {"EVC": [], "EVHS": [], "Fowler": []}
    console.log("Wrote all documents successfully");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const readData = async() => {
  const querySnapshot = await getDocs(collection(db1, "tennisCourts"));
  // .forEach()does not allow you to directly return values, 
  // .map() returns an array 

  /*
    map: returns an array from an existing array/other iterable
    let smallNumbers = [1, 3, 5];  // for each num in small numbers, create array where each num is now num * 2
    let bigNumbers = smallNumbers.map(num => { return num * 2 });  // [2, 6, 10]
  */
  
  //creates a variable that contains all of the data from our database
  let sectionListData = querySnapshot.docs.map((doc) => {
    // doc.data() is never undefined for query doc snapshots
    
    // for our collection called "tennisCourts" in firebase
    // docs.map(doc): loop through all values. In our case, there are multiple objects, each of them represents a court location with individual courts
    let allData = doc.data();  // Each court location
    // console.log("allData:", allData);
    
    //need to make sectionListData a global variable so we can call it in sectionList

    let courts = Object.values(allData.courts);  // .map(courtObj => courtObj.name);  // for each courtObj, just get the name and add to array
    let locationData = {title: allData.name, data: courts};  // {title: 'EVHS Courts', data: ['Court 1', 'Court 2', 'Court 3', 'Court 4', 'Court 5', 'Court 6']},
    return locationData;

    /*
    for (key in allData) {
      if (key !== 'default') {
        // allData[key].courts is a list of court objects from Firebase database
        // allData["EVHS"].courts
        // for each court object, create an array courts that is an array of all the court names (string)
        console.log("full data for each court", allData[key].courts);
        let courts = allData[key].courts;  // .map(courtObj => courtObj.name);  // for each courtObj, just get the name and add to array
        let locationData = {title: key, data: courts};  // {title: 'EVHS Courts', data: ['Court 1', 'Court 2', 'Court 3', 'Court 4', 'Court 5', 'Court 6']},
        courtData.push(locationData);
      }
    }
    */
  });

  return sectionListData;  

  // [
  //   {title: 'EVHS Courts', data: ['Court 1', 'Court 2', 'Court 3', 'Court 4', 'Court 5', 'Court 6']},
  //   {title: 'EVC Courts', data: ['Court 1', 'Court 2', 'Court 3', 'Court 4', 'Court 5', 'Court 6', 'Court 7', 'Court 8']},
  //   {title: 'Fowler Creek Courts', data: ['Court 1', 'Court 2', 'Court 3']}
  // ]
}

export default class CourtsListScreen extends React.Component{
  constructor(props){
    super(props)

    //use to bring court names, ID, and scroll position from MapContainer
    if (props.route.params) {
      this.name = props.route.params.name 
      this.id = props.route.params.id 
      this.position = props.route.params.position
      console.log("navigation props from MapContainer", this.name, this.id, this.position);
    }

    this.state = {
      sectionListData: [],
      loading: true
    }
  }

  async listenForData() {
    // Reference: https://firebase.google.com/docs/firestore/query-data/listen
    // Listen from entire collection rather than a single document
    const q = query(collection(db1, "tennisCourts"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let sectionListData = querySnapshot.docs.map((doc) => {
        
        // for our collection called "tennisCourts" in firebase
        // docs.map(doc): loop through all values. In our case, there are multiple objects, each of them represents a court location with individual courts
        let allData = doc.data();  // Each court location
    
        let courts = Object.values(allData.courts);  // .map(courtObj => courtObj.name);  // for each courtObj, just get the name and add to array
        let locationData = {title: allData.name, data: courts};  // {title: 'EVHS Courts', data: ['Court 1', 'Court 2', 'Court 3', 'Court 4', 'Court 5', 'Court 6']},
        return locationData;
      });
    
      if (sectionListData) {
        this.setState({
          sectionListData: sectionListData
        })
      }
  });
  }

  // This function always runs at the beginning of the component load
  // It's the "first thing that happens"
  componentDidMount() {
    this.listenForData();
    const readDataFunc = async() => {
      let data = await readData();
      // Every time state is updated, the component re-renders 
      // This means render() is called again
      // Render 1 (initial load): sectionListData is empty
      // Render 2 (after data is loaded): sectionListData is populated
      this.setState({
        sectionListData: data, 
        loading: false
      })
    }
    
    readDataFunc();
  }

  // 3h, 24s
  // 03:24
  renderCourtRow(item) {
    const isSelected = this.name === item.name
    let currentTime = Date.now()
    
    // TODO: convert firestore timestamp to javascript date?
    // https://stackoverflow.com/questions/52247445/how-do-i-convert-a-firestore-date-timestamp-to-a-js-date
    // let expirationTime = Date.parse(item.expirationTime.toDateString())  // create Date object //.toDate().toString()
    let expirationTime = item.expirationTime
    
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    let timeRemaining = expirationTime - currentTime
    //console.log(`timeRemaining:`, timeRemaining, typeof timeRemaining)
    //console.log(`expirationTime:`, expirationTime, typeof expirationTime)
    //console.log(`currentTime:`, currentTime, typeof currentTime)
    
    let timeRemainingHrs = Math.floor(timeRemaining/(1000*60*60))
    let timeRemainingMins = Math.floor((timeRemaining%(1000*60*60))/(1000*60))
    let timeRemainingString = timeRemainingHrs + " Hrs, " + timeRemainingMins + " Min"
    if(timeRemainingHrs === 0){
      timeRemainingString = timeRemainingMins + " Min"
    }
    else if (timeRemainingMins === 0) {
      timeRemainingString = timeRemainingHrs + " Hrs"
    }

    if(timeRemaining <= 0 && isSelected === false){
      return (<View key = {item} style={styles.courtRow}>
        <Text style={styles.item}>{item.name}</Text>
        <TouchableOpacity style = {globalStyles.smallButton} onPress = {() => this.props.navigation.navigate('Reserving', { "name": item.name, "id": item.id, "location": item.location })}>
          <Text style={styles.item}>Available</Text>
        </TouchableOpacity>
      </View>)
    }
    else if(timeRemaining <= 0 && isSelected) {
      return (<View key = {item} style={styles.selectedCourtRow}>
        <View style = {styles.selectedCourtContainer}>
          <Ionicons name='ios-chevron-forward-circle-outline' size={35} color='black'/>
          <Text style={[styles.item, styles.selectedCourtText]}>{item.name}</Text>
        </View>
        <TouchableOpacity style = {globalStyles.smallButton} onPress = {() => this.props.navigation.navigate('Reserving', { "name": item.name, "id": item.id, "location": item.location})}>
          <Text style={styles.item}>Available</Text>
        </TouchableOpacity>
      </View>)
    }
    else if(timeRemaining > 0 && isSelected) {
      return (<View key = {item} style={styles.selectedCourtRow}>
          <View style = {styles.selectedCourtContainer}>
            <Ionicons name='ios-chevron-forward-circle-outline' size={35} color='black'/>
            <Text style={[styles.item, styles.selectedCourtText]}>{item.name}</Text>
          </View>
          <Text style={styles.selectedTimeRemaining}>{timeRemainingString}</Text>
      </View>)
    }
    else{
      return (<View key = {item} style={styles.courtRow}>
        <Text style={styles.item}>{item.name}</Text>
        <Text style={styles.item}>{timeRemainingString}</Text>
    </View>)
    }
    //4 different cases:
    // selected and available
    // selected and not available
    // not selected and available
    // not selected and not available
  }
 
  render(){
    
    // const { name } = route?.params;
    // console.log('sectionListData', this.state.sectionListData);
    if(this.state.loading === true){
      return <View><Text>Loading...</Text></View>
    }

    return (
      <View style={styles.container}>
        {/*
        <TouchableOpacity style = {globalStyles.button} onPress={() => writeData()}>
          <Text>
            Write Data
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style = {globalStyles.button} onPress={() => readData()}>
          <Text>
            Read Data
          </Text>
        </TouchableOpacity>
        */}
        
        <View style = {styles.headerContainer}>
          <View style = {styles.backIconContainer}>
            <TouchableOpacity 
              onPress = {() => this.props.navigation.goBack()}>
              <Ionicons name='chevron-back' size={45} color='#F9F9F9'/>
            </TouchableOpacity>
          </View>

          <View style = {styles.titleContainer}>
            <Text style = {styles.titleText}>
              List of Courts
            </Text>
          </View>

          <View style = {styles.headerSpaceContainer}>
          </View>
        </View>
        
        <View style = {styles.dataContainer}>
          <SectionList
            sections={this.state.sectionListData}
            renderItem={({item}) => this.renderCourtRow(item)}
            renderSectionHeader={({section}) => <Text key = {section.title} style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   backgroundColor: '#2D9DD7'
  },
  sectionHeader: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 10,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F9F9F9',
    backgroundColor: '#268abf',
    marginBottom: 10
  },
  item: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: 44,
    fontSize: 18,
    color: '#F9F9F9'
  },
  selectedTimeRemaining: {
    padding: 10,
    height: 44,
    fontSize: 18,
    //backgroundColor: 'yellow',
  },
  courtRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingRight: 10
  },

  selectedCourtRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 10,
    //paddingRight: 10,
    //backgroundColor: "#f2f2f2",
    fontWeight: "bold",
    color: 'black',
    marginHorizontal: 10
  },

  selectedCourtText: {
    //backgroundColor: "#f2f2f2",
    fontWeight: "bold",
    color: 'black',
    fontSize: 19,
    marginLeft: -10
  },

  headerContainer: {
    paddingLeft:15,
    paddingTop: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },

  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#F9F9F9'
  },

  dataContainer: {
    flex: 11
  },

  selectedCourtContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  backIconContainer: {
    flex: 1,
    marginLeft: -10
  },

  titleContainer: {
    flex: 3,
    alignItems: 'center',
  },

  headerSpaceContainer: {
    flex: 1,
    alignItems: 'center',
  }
})