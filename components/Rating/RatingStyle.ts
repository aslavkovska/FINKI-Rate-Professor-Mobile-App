import { StyleSheet } from "react-native";

export const RatingStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    textAlignVertical: "top",
    borderRadius: 5,
    backgroundColor: "white",
    marginTop: 15,
    marginBottom: 15,
  },
  textarea: {
    width: "100%",
    height: 150,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    textAlignVertical: "top",
    borderRadius: 5,
    backgroundColor: "white",
    marginTop: 15,
    marginBottom: 15,
  },
  rateBtn: {
    backgroundColor: "#bd29bd",
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    padding: 10,
  },
  
  myRatings: {
    flex: 1,
    backgroundColor: "#000", // Black background
    padding: 10,
  },
  ratedCard: {
    backgroundColor: "#1c1c1e", // Dark gray card
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#fff", // White shadow for a subtle contrast
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // For Android shadow
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    color: "#fff", // White text
    fontSize: 16,
    marginVertical: 5,
  },
  cardImage: {
    width: 150,
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff", // White border for the image
    marginBottom: 10,
  },
});
