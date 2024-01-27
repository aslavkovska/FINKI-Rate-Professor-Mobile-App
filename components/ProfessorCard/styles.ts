import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: "#222",
    padding: 20,
    width: 160,
    height: 300,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  cardText: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
    marginVertical: 5,
  },
  rateButton: {
    position: "absolute",
    bottom: 10,
    backgroundColor: "#cc4bae",
    padding: 10,
    borderRadius: 5,
    alignSelf: "center",
  },
  rateButtonText: {
    color: "#fff",
  },
  cardContainer: {
    // backgroundColor: "#cc4bae",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: "center",
    overflow: "hidden",
  },
  cardGradient:{
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    width: "100%",
  },
  popularProf:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  },
  image: {
    width: 100,
    height: 150,
    marginTop: 20,
    borderRadius:10
  },
  textContainer: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color:'white',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#333",
  },
});
