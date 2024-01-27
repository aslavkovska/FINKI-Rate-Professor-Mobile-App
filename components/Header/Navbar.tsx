import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { styles } from "./style";
import {
  NavigationProp,
  useNavigation,
  useNavigationState,
} from "@react-navigation/native";
import { RootStackParamList } from "../../types/ProjectTypes";
const Navbar = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const navigationState = useNavigationState(state => state);
  const currentRouteName = navigationState?.routes[navigationState.index]?.name;

  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomePage")}
        style={styles.navItem}
      >
        <Icon
          name="home"
          size={24}
          color={currentRouteName === "HomePage" ? "white" : "black"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("MyRatings")}
        style={styles.navItem}
      >
        <MaterialIcons
          name="grade"
          size={24}
          color={currentRouteName === "MyRatings" ? "white" : "black"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("ProfilePage")}
        style={styles.navItem}
      >
        <Icon
          name="map"
          size={24}
          color={currentRouteName === "ProfilePage" ? "white" : "black"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
