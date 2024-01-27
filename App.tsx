import React from "react";
import { SafeAreaView } from "react-native";
import HomePage from "./components/Home/HomePage";
import { Detail } from "./components/Detail/DetailComponent";

import { styles } from "./AppStyle";
import {
  NavigationContainer
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Navbar from "./components/Header/Navbar";
import MyRatings from "./components/Rating/MyRatings";
import RatingPage from "./components/Rating/RatingPage";
import LocationService from "./components/LocationPage/LocationService";

const App = () => {
  const Stack = createStackNavigator();
  // const route = useNavigationState((state) => )

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomePage"
          screenOptions={{ headerShown: false }}
        >
          {/* Screen showing on each route, default is the homepage */}
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="RatingPage" component={RatingPage} />
          <Stack.Screen name="MyRatings" component={MyRatings} />
          <Stack.Screen name="ProfilePage" component={LocationService} />
        </Stack.Navigator>
        {/* Navbar Routing */}
        <Navbar />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
