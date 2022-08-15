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
                latitudeDelta: 0.17,
                longitudeDelta: 0.17
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
              onCalloutPress={() => listNavigator('Evergreen Valley High School Court 1', 1, 0)}  // const listNavigator = (name, locationId, id) => {
              title={"Evergreen Valley High School Court 1"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.32251011092525, 
              longitude: -121.78070160210117}}
              onCalloutPress={() => listNavigator('Evergreen Valley High School Court 2', 1, 1)}
              title={"Evergreen Valley High School Court 2"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.32237734756568, 
              longitude: -121.78058358687817}}
              onCalloutPress={() => listNavigator('Evergreen Valley High School Court 3', 1, 2)}
              title={"Evergreen Valley High School Court 3"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.32283515126386, 
              longitude: -121.78049435585591}}
              onCalloutPress={() => listNavigator('Evergreen Valley High School Court 4', 1, 3)}
              title={"Evergreen Valley High School Court 4"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.32270650246004, 
              longitude: -121.78037746843677}}
              onCalloutPress={() => listNavigator('Evergreen Valley High School Court 5', 1, 4)}
              title={"Evergreen Valley High School Court 5"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.32257878153647, 
              longitude: -121.78024393330952}}
              onCalloutPress={() => listNavigator('Evergreen Valley High School Court 6', 1, 5)}
              title={"Evergreen Valley High School Court 6"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.29859128104783,
              longitude: -121.763818153150857}}
              onCalloutPress={() => listNavigator('Evergreen Valley College Court 1', 0, 0)}
              title={"Evergreen Valley College Court 1"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.29859128104783, 
              longitude: -121.76364649178096}}
              onCalloutPress={() => listNavigator('Evergreen Valley College Court 2', 0, 1)}
              title={"Evergreen Valley College Court 2"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.29860194937739, 
              longitude: -121.76347483041104}}
              onCalloutPress={() => listNavigator('Evergreen Valley College Court 3', 0, 2)}
              title={"Evergreen Valley College Court 3"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.29860408304311, 
              longitude: -121.76330316904112}}
              onCalloutPress={() => listNavigator('Evergreen Valley College Court 4', 0, 3)}
              title={"Evergreen Valley College Court 4"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.298262695756485, 
              longitude: -121.76375914455495}}
              onCalloutPress={() => listNavigator('Evergreen Valley College Court 5', 0, 4)}
              title={"Evergreen Valley College Court 5"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.29826696310713, 
              longitude: -121.76358211876723}}
              onCalloutPress={() => listNavigator('Evergreen Valley College Court 6', 0, 5)}
              title={"Evergreen Valley College Court 6"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.29827123045755, 
              longitude: -121.7634050929795}}
              onCalloutPress={() => listNavigator('Evergreen Valley College Court 7', 0, 6)}
              title={"Evergreen Valley College Court 7"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.29827123045755, 
              longitude: -121.7632253849829}}
              onCalloutPress={() => listNavigator('Evergreen Valley College Court 8', 0, 7)}
              title={"Evergreen Valley College Court 8"}
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

          <MapView.Marker
              coordinate={{latitude: 37.40264050523429, 
              longitude: -121.86786749536508}}
              onCalloutPress={() => listNavigator('Cataldi Park Court 1', 3, 0)}
              title={"Cataldi Park Court 1"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.40278258290086, 
              longitude: -121.86763671833701}}
              onCalloutPress={() => listNavigator('Cataldi Park Court 2', 3, 1)}
              title={"Cataldi Park Court 2"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.402913202453426, 
              longitude: -121.86739440245749}}
              onCalloutPress={() => listNavigator('Cataldi Park Court 3', 3, 2)}
              title={"Cataldi Park Court 3"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.403057571167665,  
              longitude: -121.86715208657803}}
              onCalloutPress={() => listNavigator('Cataldi Park Court 4', 3, 3)}
              title={"Cataldi Park Court 4"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.40272071040176,  
              longitude: -121.8672184349736}}
              onCalloutPress={() => listNavigator('Cataldi Park Court 5', 3, 4)}
              title={"Cataldi Park Court 5"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.40258321577638,  
              longitude: -121.86746075085307}}
              onCalloutPress={() => listNavigator('Cataldi Park Court 6', 3, 5)}
              title={"Cataldi Park Court 6"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.4024434293153,  
              longitude: -121.86769729730685}}
              onCalloutPress={() => listNavigator('Cataldi Park Court 7', 3, 6)}
              title={"Cataldi Park Court 7"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.30016323482611, 
              longitude: -121.76689830214801}}
              onCalloutPress={() => listNavigator('Evergreen Valley College Lower Court 1', 4, 0)}
              title={"Evergreen Valley College Lower Court 1"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.300187723968236, 
              longitude: -121.76673531575511}}
              onCalloutPress={() => listNavigator('Evergreen Valley College Lower Court 2', 4, 1)}
              title={"Evergreen Valley College Lower Court 2"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.30021226060312, 
              longitude: -121.76657438322609}}
              onCalloutPress={() => listNavigator('Evergreen Valley College Lower Court 3', 4, 2)}
              title={"Evergreen Valley College Lower Court 3"}
          /> 

          <MapView.Marker
              coordinate={{latitude: 37.337595815956035, 
              longitude: -121.77861450698303}}
              onCalloutPress={() => listNavigator('Groesbeck Park Court 1', 5, 0)}
              title={"Groesbeck Park Court 1"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.33746088275746, 
              longitude: -121.77847282862275}}
              onCalloutPress={() => listNavigator('Groesbeck Park Court 2', 5, 1)}
              title={"Groesbeck Park Court 2"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.33737092004381, 
              longitude: -121.77828452191096}}
              onCalloutPress={() => listNavigator('Groesbeck Park Court 3', 5, 2)}
              title={"Groesbeck Park Court 3"}
          /> 

          <MapView.Marker
              coordinate={{latitude: 37.30187309302659, 
              longitude: -121.8885498057978}}
              onCalloutPress={() => listNavigator('River Glen Park Court 1', 6, 0)}
              title={"River Glen Park Court 1"}
          /> 

          <MapView.Marker
              coordinate={{latitude: 37.301837898597185, 
              longitude: -121.8883934273991}}
              onCalloutPress={() => listNavigator('River Glen Park Court 2', 6, 1)}
              title={"River Glen Park Court 2"}
          />  

          <MapView.Marker
              coordinate={{latitude: 37.34713337508246, 
              longitude: -121.80776540425995}}
              onCalloutPress={() => listNavigator('Mt. Pleasant High School Court 1', 7, 0)}
              title={"Mt. Pleasant High School Court 1"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.34720385545972, 
              longitude: -121.80762650763504}}
              onCalloutPress={() => listNavigator('Mt. Pleasant High School Court 2', 7, 1)}
              title={"Mt. Pleasant High School Court 2"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.3472766851134, 
              longitude: -121.80748908863379}}
              onCalloutPress={() => listNavigator('Mt. Pleasant High School Court 3', 7, 2)}
              title={"Mt. Pleasant High School Court 3"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.34734716535611, 
              longitude: -121.80735019200884}}
              onCalloutPress={() => listNavigator('Mt. Pleasant High School Court 4', 7, 3)}
              title={"Mt. Pleasant High School Court 4"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.347415296196864, 
              longitude: -121.8072112953209}}
              onCalloutPress={() => listNavigator('Mt. Pleasant High School Court 5', 7, 4)}
              title={"Mt. Pleasant High School Court 5"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.347489300313406, 
              longitude: -121.80707387631965}}
              onCalloutPress={() => listNavigator('Mt. Pleasant High School Court 6', 7, 5)}
              title={"Mt. Pleasant High School Court 6"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.347559780356555, 
              longitude: -121.80693497969473}}
              onCalloutPress={() => listNavigator('Mt. Pleasant High School Court 7', 7, 6)}
              title={"Mt. Pleasant High School Court 7"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.34763143499926, 
              longitude: -121.8067916501988}}
              onCalloutPress={() => listNavigator('Mt. Pleasant High School Court 8', 7, 7)}
              title={"Mt. Pleasant High School Court 8"}
          /> 

          <MapView.Marker
              coordinate={{latitude: 37.31673266947625, 
              longitude: -121.81150539471017}}
              onCalloutPress={() => listNavigator('Meadowfair Park Court 1', 8, 0)}
              title={"Meadowfair Park Court 1"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.31677124997427, 
              longitude: -121.81134167060048}}
              onCalloutPress={() => listNavigator('Meadowfair Park Court 2', 8, 1)}
              title={"Meadowfair Park Court 2"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.31679697029527, 
              longitude: -121.81117794649079}}
              onCalloutPress={() => listNavigator('Meadowfair Park Court 3', 8, 2)}
              title={"Meadowfair Park Court 3"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.316822690607474, 
              longitude: -121.81101624366642}}
              onCalloutPress={() => listNavigator('Meadowfair Park Court 4', 8, 3)}
              title={"Meadowfair Park Court 4"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.35568214425194, 
              longitude: -121.81065423358808}}
              onCalloutPress={() => listNavigator('Mount Pleasant Park Court 1', 9, 0)}
              title={"Mount Pleasant Park Court 1"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.35567942108122, 
              longitude: -121.8104880788538}}
              onCalloutPress={() => listNavigator('Mount Pleasant Park Court 2', 9, 1)}
              title={"Mount Pleasant Park Court 2"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.366376450096894, 
              longitude: -121.82978046622767}}
              onCalloutPress={() => listNavigator('James Lick High School Court 1', 10, 0)}  
              title={"James Lick High School Court 1"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.36634328797236, 
              longitude: -121.82961735793931}}
              onCalloutPress={() => listNavigator('James Lick High School Court 2', 10, 1)}
              title={"James Lick High School Court 2"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.36631314057369, 
              longitude: -121.82945804286696}}
              onCalloutPress={() => listNavigator('James Lick High School Court 3', 10, 2)}
              title={"James Lick High School Court 3"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.36606442407241, 
              longitude: -121.82987529662789}}
              onCalloutPress={() => listNavigator('James Lick High School Court 4', 10, 3)}
              title={"James Lick High School Court 4"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.36603126180995, 
              longitude: -121.82971598155552}}
              onCalloutPress={() => listNavigator('James Lick High School Court 5', 10, 4)}
              title={"James Lick High School Court 5"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.3659978123618, 
              longitude: -121.82955497576143}}
              onCalloutPress={() => listNavigator('James Lick High School Court 6', 10, 5)}
              title={"James Lick High School Court 6"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.3190123814808, 
              longitude: -121.85145313419441}}
              onCalloutPress={() => listNavigator('Yerba Buena High School Court 1', 11, 0)}  
              title={"Yerba Buena High School Court 1"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.319101995575245, 
              longitude: -121.8513160358277}}
              onCalloutPress={() => listNavigator('Yerba Buena High School Court 2', 11, 1)}
              title={"Yerba Buena High School Court 2"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.31918712886601, 
              longitude: -121.85117705940114}}
              onCalloutPress={() => listNavigator('Yerba Buena High School Court 3', 11, 2)}
              title={"Yerba Buena High School Court 3"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.31927674275209, 
              longitude: -121.85104183909421}}
              onCalloutPress={() => listNavigator('Yerba Buena High School Court 4', 11, 3)}
              title={"Yerba Buena High School Court 4"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.319361875844926, 
              longitude: -121.85090286266765}}
              onCalloutPress={() => listNavigator('Yerba Buena High School Court 5', 11, 4)}
              title={"Yerba Buena High School Court 5"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.31944999596223, 
              longitude: -121.8507657643009}}
              onCalloutPress={() => listNavigator('Yerba Buena High School Court 6', 11, 5)}
              title={"Yerba Buena High School Court 6"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.319536622417544, 
              longitude: -121.85062866593418}}
              onCalloutPress={() => listNavigator('Yerba Buena High School Court 7', 11, 6)}
              title={"Yerba Buena High School Court 7"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.351597903426374, 
              longitude: -121.87357570921391}}
              onCalloutPress={() => listNavigator('San Jose High School Court 1', 12, 0)}  
              title={"San Jose High School Court 1"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.35163490075065, 
              longitude: -121.8734276217574}}
              onCalloutPress={() => listNavigator('San Jose High School Court 2', 12, 1)}
              title={"San Jose High School Court 2"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.35168030653285, 
              longitude: -121.87327953430083}}
              onCalloutPress={() => listNavigator('San Jose High School Court 3', 12, 2)}
              title={"San Jose High School Court 3"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.351718985510814, 
              longitude: -121.8731272157741}}
              onCalloutPress={() => listNavigator('San Jose High School Court 4', 12, 3)}
              title={"San Jose High School Court 4"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.351754301081975, 
              longitude: -121.87297912831757}}
              onCalloutPress={() => listNavigator('San Jose High School Court 5', 12, 4)}
              title={"San Jose High School Court 5"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.29405566505925, 
              longitude: -121.83133385931173}}
              onCalloutPress={() => listNavigator('Andrew Hill High School Court 1', 13, 0)}  
              title={"Andrew Hill High School Court 1"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.2940889119264, 
              longitude: -121.83119075415692}}
              onCalloutPress={() => listNavigator('Andrew Hill High School Court 2', 13, 1)}
              title={"Andrew Hill High School Court 2"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.29411812885815, 
              longitude: -121.83104384975026}}
              onCalloutPress={() => listNavigator('Andrew Hill High School Court 3', 13, 2)}
              title={"Andrew Hill High School Court 3"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.29415137569773, 
              longitude: -121.83090074459547}}
              onCalloutPress={() => listNavigator('Andrew Hill High School Court 4', 13, 3)}
              title={"Andrew Hill High School Court 4"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.29418160008458, 
              longitude: -121.83075384018879}}
              onCalloutPress={() => listNavigator('Andrew Hill High School Court 5', 13, 4)}
              title={"Andrew Hill High School Court 5"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.294208802022375, 
              longitude: -121.830610735034}}
              onCalloutPress={() => listNavigator('Andrew Hill High School Court 6', 13, 5)}
              title={"Andrew Hill High School Court 6"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.33514507758597, 
              longitude: -121.86599281251283}}
              onCalloutPress={() => listNavigator('William Street Park Court 1', 14, 0)}
              title={"William Street Park Court 1"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.335125707527524, 
              longitude: -121.86579813550333}}
              onCalloutPress={() => listNavigator('William Street Park Court 2', 14, 1)}
              title={"William Street Park Court 2"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.2855032183589, 
              longitude: -121.83227994619067}}
              onCalloutPress={() => listNavigator('Solari Park Court 1', 15, 0)}
              title={"Solari Park Court 1"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.28546638150952, 
              longitude: -121.83212091869835}}
              onCalloutPress={() => listNavigator('Solari Park Court 2', 15, 1)}
              title={"Solari Park Court 2"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.28518449893482, 
              longitude: -121.83239670055214}}
              onCalloutPress={() => listNavigator('Solari Park Court 3', 15, 2)}
              title={"Solari Park Court 3"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.28514766192945, 
              longitude: -121.83223566005358}}
              onCalloutPress={() => listNavigator('Solari Park Court 4', 15, 3)}
              title={"Solari Park Court 4"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.352677433888104, 
              longitude: -121.88543849505812}}
              onCalloutPress={() => listNavigator('Backesto Park Court 1', 16, 0)}
              title={"Backesto Park Court 1"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.35274435140478, 
              longitude: -121.88529590122012}}
              onCalloutPress={() => listNavigator('Backesto Park Court 2', 16, 1)}
              title={"Backesto Park Court 2"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.35281126886182, 
              longitude: -121.88515330738211}}
              onCalloutPress={() => listNavigator('Backesto Park Court 3', 16, 2)}
              title={"Backesto Park Court 3"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.35287955191975, 
              longitude: -121.88501071354409}}
              onCalloutPress={() => listNavigator('Backesto Park Court 4', 16, 3)}
              title={"Backesto Park Court 4"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.352949200574834, 
              longitude: -121.88486811970608}}
              onCalloutPress={() => listNavigator('Backesto Park Court 5', 16, 4)}
              title={"Backesto Park Court 5"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.353013386533085, 
              longitude: -121.88472896186418}}
              onCalloutPress={() => listNavigator('Backesto Park Court 6', 16, 5)}
              title={"Backesto Park Court 6"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.35308166940718, 
              longitude: -121.88458465002812}}
              onCalloutPress={() => listNavigator('Backesto Park Court 7', 16, 6)}
              title={"Backesto Park Court 7"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.35314820863482, 
              longitude: -121.88444307146149}}
              onCalloutPress={() => listNavigator('Backesto Park Court 8', 16, 7)}
              title={"Backesto Park Court 8"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.26015357104808, 
              longitude: -121.88176337089692}}
              onCalloutPress={() => listNavigator('John Muir Middle School Court 1', 17, 0)}  
              title={"John Muir Middle School Court 1"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.26019550615231, 
              longitude: -121.88162126952686}}
              onCalloutPress={() => listNavigator('John Muir Middle School Court 2', 17, 1)}
              title={"John Muir Middle School Court 2"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.2602361704735, 
              longitude: -121.88147118493377}}
              onCalloutPress={() => listNavigator('John Muir Middle School Court 3', 17, 2)}
              title={"John Muir Middle School Court 3"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.26027302249559, 
              longitude: -121.88132429362987}}
              onCalloutPress={() => listNavigator('John Muir Middle School Court 4', 17, 3)}
              title={"John Muir Middle School Court 4"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.24751165870443, 
              longitude: -121.85896243621434}}
              onCalloutPress={() => listNavigator('Allen at Steinbeck Elementary School Court 1', 18, 0)}  
              title={"Allen at Steinbeck Elementary School Court 1"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.24746772146668, 
              longitude: -121.8587641064265}}
              onCalloutPress={() => listNavigator('Allen at Steinbeck Elementary School Court 2', 18, 1)}
              title={"Allen at Steinbeck Elementary School Court 2"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.2474230395037, 
              longitude: -121.85856484112081}}
              onCalloutPress={() => listNavigator('Allen at Steinbeck Elementary School Court 3', 18, 2)}
              title={"Allen at Steinbeck Elementary School Court 3"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.24737686811411, 
              longitude: -121.858366511333}}
              onCalloutPress={() => listNavigator('Allen at Steinbeck Elementary School Court 4', 18, 3)}
              title={"Allen at Steinbeck Elementary School Court 4"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.28801713070056, 
              longitude: -121.89737071368727}}
              onCalloutPress={() => listNavigator('Wallenberg Park Court 1', 19, 0)}
              title={"Wallenberg Park Court 1"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.288097300500155, 
              longitude: -121.89719495818505}}
              onCalloutPress={() => listNavigator('Wallenberg Park Court 2', 19, 1)}
              title={"Wallenberg Park Court 2"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.288173741392306, 
              longitude: -121.89701451586946}}
              onCalloutPress={() => listNavigator('Wallenberg Park Court 3', 19, 2)}
              title={"Wallenberg Park Court 3"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.28825366391724, 
              longitude: -121.89683511816838}}
              onCalloutPress={() => listNavigator('Wallenberg Park Court 4', 19, 3)}
              title={"Wallenberg Park Court 4"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.28788698109095, 
              longitude: -121.89681511470882}}
              onCalloutPress={() => listNavigator('Wallenberg Park Court 5', 19, 4)}
              title={"Wallenberg Park Court 5"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.287964041150765, 
              longitude: -121.8966348538671}}
              onCalloutPress={() => listNavigator('Wallenberg Park Court 6', 19, 5)}
              title={"Wallenberg Park Court 6"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.28804299790658, 
              longitude: -121.89645380477194}}
              onCalloutPress={() => listNavigator('Wallenberg Park Court 7', 19, 6)}
              title={"Wallenberg Park Court 7"}
          />

          <MapView.Marker
              coordinate={{latitude: 37.2881214852428, 
              longitude: -121.89627605128001}}
              onCalloutPress={() => listNavigator('Wallenberg Park Court 8', 19, 7)}
              title={"Wallenberg Park Court 8"}
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