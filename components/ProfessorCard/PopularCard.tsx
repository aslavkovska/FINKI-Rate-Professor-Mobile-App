import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import RatingWidget from "../Rating/RatingWidget";
import { NavigationProp } from "@react-navigation/native";

import { styles } from "./styles";
import { RootStackParamList, TPCard } from "../../types/ProjectTypes";
import { LinearGradient } from "expo-linear-gradient";

const PopularCard = ({
  imageUrl,
  name,
  surname,
  id,
  navigation,
  email,
  grade,
  status,
}: TPCard & { navigation: NavigationProp<RootStackParamList> }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (id) {
          navigation.navigate("RatingPage", {
            id: id,
            name: name,
            surname: surname,
            image: imageUrl,
            email: email,
            status: status,
          });
        } else {
          console.error("Missing ID for navigation");
        }
      }}
    >
      <View style={styles.cardContainer}>
        <LinearGradient
          colors={["#FF6FD8", "#3813C2"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.cardGradient}
        >
          <Text style={styles.popularProf}>The most popular Professor</Text>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              {status} {name} {surname}
            </Text>
          </View>
          {grade && (
            <RatingWidget
              setRating={grade}
              handleChange={() => {
                console.log("everything ok");
              }}
            />
          )}
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

export default PopularCard;
