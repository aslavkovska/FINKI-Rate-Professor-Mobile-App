import React, { useState, useEffect } from "react";
import { StyleSheet, View, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { LocationState } from "../../types/ProjectTypes";


export default function LocationService() {
  const [location, setLocation] = useState<LocationState | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
    })();
  }, []);

  if (errorMsg) {
    Alert.alert("Error", errorMsg);
  }
  const defaultRegion = {
    latitude: 41.975107,
    longitude: 21.454616,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        // initialRegion={{
        //   latitude: location ? location.latitude : 0,
        //   longitude: location ? location.longitude : 0,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // }}
        // Only with a default region works, cause it have to be PAID FOR A GOOGLE MAP API
        initialRegion={defaultRegion}
      >
        {location && <Marker coordinate={location} title={"Your Location"} />}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
