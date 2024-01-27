import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { styles } from "../Detail/style";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../types/ProjectTypes";
import { RatingStyles } from "./RatingStyle";
import axios from "axios";
import RatingWidget from "./RatingWidget";
const api_url = `${process.env.EXPO_PUBLIC_API_URL}`;
export type RatingPageRouteProp = RouteProp<RootStackParamList, "RatingPage">;
const RatingPage = () => {
  const [reviews, setTextValue] = useState("");
  const [grade, setRateValue] = useState(0);
  const route = useRoute<RatingPageRouteProp>();
  const { id, name, surname, image, email } = route.params;
  const [inputEmail, setEmail] = useState("");

  const handleRate = () => {
    if (grade === 0 || inputEmail.trim() === "") {
      alert("All fields are required!");
      return;
    }
    if (!inputEmail.endsWith("@students.finki.ukim.mk")) {
      alert("You must use your students email to rate.");
      return;
    }
    axios
      .get(`${api_url}/professors/${id}`)
      .then((response) => {
        const currentData = response.data;
        const updatedReviews = [...currentData.reviews, reviews];

        let totalGrades = currentData.votes * currentData.grade;
        totalGrades += grade;
        const newVotes = currentData.votes + 1;
        const averageRating = totalGrades / newVotes;

        return axios.patch(`${api_url}/professors/${id}`, {
          grade: averageRating,
          reviews: updatedReviews,
          votes: newVotes,
        });
      })
      .then((updateResponse) => {
        console.log("Update successful", updateResponse);
        setRateValue(0);
        setTextValue("");
        setEmail("");
      })
      .catch((error) => console.log("Error during update:", error));
  };

  const handleRatingChange = (newRating: number) => {
    setRateValue(newRating);
  };
  return (
    <View style={styles.contentContainer}>
      <Text>Rate me</Text>
      <View style={styles.FirstContent}>
        <Image source={{ uri: image }} style={styles.imageStyle} />
        <View style={styles.InfoParagraph}>
          <Text style={styles.nameText}>
            Д-р {name} {surname}
          </Text>
          <Text style={styles.emailText}>{email}</Text>
          <RatingWidget setRating={grade} handleChange={handleRatingChange} />
        </View>
      </View>
      <TextInput
        placeholder="Enter your email.."
        value={inputEmail}
        style={RatingStyles.textInput}
        onChangeText={setEmail}
      />
      <TextInput
        style={RatingStyles.textarea}
        onChangeText={setTextValue}
        value={reviews}
        multiline={true}
        numberOfLines={10}
        placeholder="Enter your text here..."
      />
      <View style={styles.buttonView}>
        <TouchableOpacity style={RatingStyles.rateBtn} onPress={handleRate}>
          <Text style={{ color: "white", fontSize: 20 }}>Rate me</Text>
        </TouchableOpacity>
        {/* <Button  title="Rate me" color="#bd29bd" /> */}
      </View>
    </View>
  );
};

export default RatingPage;
