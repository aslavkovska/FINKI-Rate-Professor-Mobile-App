import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    navbar: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "#333",
      flexDirection: "row",
      justifyContent: "space-around",
      paddingVertical: 10,
    },
    navItem: {
      flex: 1,
      alignItems: "center",
      padding: 10,
    },
    navText: {
      color: "#fff",
    },
  });