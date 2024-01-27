import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  HomePage: {
    backgroundColor: "black",
    color: "white",
    width: '100%',
  },
  container: {
    marginTop: 15,
    marginBottom: 15,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flatList: {
    width: "100%",
    // justifyContent:'center',
    // alignItems:'center',
    marginTop:20,
    // marginBottom:400,
    padding:20,
    // height:'100%',
    marginBottom:400 // Centers items on the main-axis (vertical) if there's additional space


  },
  flatListContentContainer: {
    justifyContent: 'center', // Centers items on the cross-axis (horizontal)
    alignItems: 'center',
  },
});
