import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    marginTop: 10,
    borderRadius: 15,
    color: "#a735a1",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        color: "white",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  buttonStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#ef00ff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
