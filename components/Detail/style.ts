import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
    height: '100%',
    backgroundColor: "#000",
    padding: 20,
  },
  FirstContent: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  InfoParagraph: {
    width: "100%",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#333",
    borderRadius: 10,
    
  },
  scrollView: {
    flex: 1,
  },
  imageStyle: {
    width: 120,
    height: 150,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#fff",
    marginBottom: 10,
  },
  nameText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  emailText: {
    color: "#888",
    marginBottom: 20,
    fontSize:18
  },
  SecondContent: {
    width: "100%",
    backgroundColor: "#1a1a1a",
    padding: 15,
    borderRadius: 10,
  },
  descriptionText: {
    color: "#fff",
    fontSize:20
  },
  Reviews: {
    marginTop: 25,
    marginBottom: 25,
  },
  reviewText: {
    borderColor:'white',
    backgroundColor:'#333',
    borderRadius:10,
    padding: 10,
    marginTop:10,
    marginBottom:10,
    color: "white",
    fontSize:20
  },
  buttonView:{
    backgroundColor:'#333',
    width:'100%',
    marginTop:20,
    padding: 10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  }
});
