import React, {useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import globalStyles from '../styles';

// import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Platform,
  Button,
  Dimensions,
  Linking,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MapContainer = (props) => {
  const listNavigator = (name, locationId, id) => {
    props.navigation.navigate('CourtsList', {
      name: name,
      locationId: locationId,
      courtId: id
    })
  }

  return (
    <View>
      <View style = {{
        position: 'absolute',
        top: 67,
        left: 5,
        zIndex: 1
      }}>
        <TouchableOpacity 
        onPress = {() => props.navigation.goBack()}>
          <Ionicons name='chevron-back' size={50} color='#F9F9F9'/>
        </TouchableOpacity>
      </View>
      
      <View style={styles.container}>
          <MapView style={styles.map}
            initialRegion={{
                latitude: 37.31294737435576, 
                longitude: -121.77184354734956,
                latitudeDelta: 0.03,
                longitudeDelta: 0.03
            }}
            mapType= 'satellite'>
          {/*<MapView.Marker
              coordinate={{latitude: 37.322621513925704, 
              longitude: -121.78052966351308}}
              pinColor= 'blue'
              title={"Evergreen Valley High School Tennis Courts"}
          />
          
          <MapView.Marker
              coordinate={{latitude: 37.29844431160065, 
              longitude: -121.76353165030118}}
              title={"Evergreen Valley College Tennis Courts"}
              pinColor= 'blue'
          />

          <MapView.Marker
              coordinate={{latitude: 37.31341813025058,
              longitude: -121.76418339435577}}
              title={"Fowler Creek Tennis Courts"}
              pinColor= 'blue'
          />*/}

          <MapView.Marker
              coordinate={{latitude: 37.322633717980246, 
              longitude: -121.78083400942455}}
              onCalloutPress={() => listNavigator('EVHS Court 1', 1, 0)}  // const listNavigator = (name, locationId, id) => {
              title={"EVHS Court 1"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.32251011092525, 
              longitude: -121.78070160210117}}
              onCalloutPress={() => listNavigator('EVHS Court 2', 1, 1)}
              title={"EVHS Court 2"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.32237734756568, 
              longitude: -121.78058358687817}}
              onPress={() => listNavigator('EVHS Court 3', 1, 2)}
              title={"EVHS Court 3"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.32283515126386, 
              longitude: -121.78049435585591}}
              onCalloutPress={() => listNavigator('EVHS Court 4', 1, 3)}
              title={"EVHS Court 4"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.32270650246004, 
              longitude: -121.78037746843677}}
              onCalloutPress={() => listNavigator('EVHS Court 5', 1, 4)}
              title={"EVHS Court 5"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.32257878153647, 
              longitude: -121.78024393330952}}
              onCalloutPress={() => listNavigator('EVHS Court 6', 1, 5)}
              title={"EVHS Court 6"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.29859128104783,
              longitude: -121.763818153150857}}
              onCalloutPress={() => listNavigator('EVC Court 1', 0, 0)}
              title={"EVC Court 1"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.29859128104783, 
              longitude: -121.76364649178096}}
              onCalloutPress={() => listNavigator('EVC Court 2', 0, 1)}
              title={"EVC Court 2"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.29860194937739, 
              longitude: -121.76347483041104}}
              onCalloutPress={() => listNavigator('EVC Court 3', 0, 2)}
              title={"EVC Court 3"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.29860408304311, 
              longitude: -121.76330316904112}}
              onCalloutPress={() => listNavigator('EVC Court 4', 0, 3)}
              title={"EVC Court 4"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.298262695756485, 
              longitude: -121.76375914455495}}
              onCalloutPress={() => listNavigator('EVC Court 5', 0, 4)}
              title={"EVC Court 5"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.29826696310713, 
              longitude: -121.76358211876723}}
              onCalloutPress={() => listNavigator('EVC Court 6', 0, 5)}
              title={"EVC Court 6"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.29827123045755, 
              longitude: -121.7634050929795}}
              onCalloutPress={() => listNavigator('EVC Court 7', 0, 6)}
              title={"EVC Court 7"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.29827123045755, 
              longitude: -121.7632253849829}}
              onCalloutPress={() => listNavigator('EVC Court 8', 0, 7)}
              title={"EVC Court 8"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.31322887445146, 
              longitude: -121.76436620771146}}
              onCalloutPress={() => listNavigator('Fowler Creek Court 1', 2, 0)}
              title={"Fowler Creek Court 1"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.31325340683122, 
              longitude: -121.7641583365128}}
              onCalloutPress={() => listNavigator('Fowler Creek Court 2', 2, 1)}
              title={"Fowler Creek Court 2"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.31328860544906, 
              longitude: -121.76394912420963}}
              onCalloutPress={() => listNavigator('Fowler Creek Court 3', 2, 2)}
              title={"Fowler Creek Court 3"}
          />


          {/*<MapView.Marker
              coordinate={{latitude: 37.29843980293897,
              longitude: -121.76352729142447}}
              title={"Evergreen Valley College Tennis Courts"}
              //description={"The place where I live"}
              />*/}
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    position: 'absolute'
  },
    map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    }
});

export default MapContainer