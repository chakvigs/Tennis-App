import MapView, {Marker} from 'react-native-maps';
import React, {useState, useEffect} from 'react';

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
  Linking
} from 'react-native';
import Geolocation from '@react-native-community/geolocation'

const MapContainer  = () => {
  /*const [
    currentLongitude,
    setCurrentLongitude
  ] = useState('...');
  const [
    currentLatitude,
    setCurrentLatitude
  ] = useState('...');
  const [
    locationStatus,
    setLocationStatus
  ] = useState('');

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);



  const getOneTimeLocation = () => {
        Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        //getting the Longitude from the location json
        const currentLongitude =
          JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude =
          JSON.stringify(position.coords.latitude);
          
      }, (error) => alert(error.message), { 
        enableHighAccuracy: true, timeout: 20000
      }
    );
  }*/

        return (
            <View style={styles.container}>
                <MapView style={styles.map}
                  initialRegion={{
                      latitude: 37.3225789,
                      longitude: -121.781129,
                  }}
                  mapType= 'satellite'>
                <MapView.Marker
                    coordinate={{latitude: 37.32293645064867,
                    longitude: -121.78048932518097}}
                    title={"Evergreen Valley High School Tennis Courts"}
                    onPress={() => Linking.openURL('https://www.google.com/maps/dir//google+maps+evhs+tennis+courts/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x808e2d46dca5e51d:0x5c59a05ae8a258b2?sa=X&ved=2ahUKEwjrxcWC_Pj2AhVJJUQIHQygBGAQ9Rd6BAhjEAM')}
                    //description={"The place where I live"}
                />

                <MapView.Marker
                    coordinate={{latitude: 37.32293645064867,
                    longitude: 37.32293645064867}}
                    title={"Evergreen Valley High School Tennis Courts"}
                    onPress={() => Linking.openURL('https://www.google.com/maps/dir//google+maps+evhs+tennis+courts/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x808e2d46dca5e51d:0x5c59a05ae8a258b2?sa=X&ved=2ahUKEwjrxcWC_Pj2AhVJJUQIHQygBGAQ9Rd6BAhjEAM')}
                    //description={"The place where I live"}
                />
                <MapView.Marker
                    coordinate={{latitude: 37.29843980293897,
                    longitude: -121.76352729142447}}
                    title={"Evergreen Valley College Tennis Courts"}
                    onPress={() => Linking.openURL('https://www.google.com/maps/dir/37.325065,-121.7765303/Evergreen+Valley+College+Tennis+Courts,+Tennis,+Yerba+Buena+Road,+San+Jose,+CA/@37.3126126,-121.7837676,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x808e2d4a0b321f13:0x9045adad9905ebf3!2m2!1d-121.7635371!2d37.2984055')}
                    //description={"The place where I live"}
                />
              </MapView>
            </View>
        );
}

/*export default class MapContainer extends React.Component {

render(){
  return(
    <View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={{
              latitude: 37.3225789,
              longitude: -121.781129,
          }}
        >
        <MapView.Marker
            coordinate={{latitude: 37.32293645064867,
            longitude: -121.78048932518097}}
            title={"Evergreen Valley High School Tennis Courts"}
            //description={"The place where I live"}
         />
         <MapView.Marker
            coordinate={{latitude: 37.29843980293897,
            longitude: -121.76352729142447}}
            title={"Evergreen Valley College Tennis Courts"}
            //description={"The place where I live"}
         />
      </MapView>
 </View>
  )
}
}*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    }
});

export default MapContainer