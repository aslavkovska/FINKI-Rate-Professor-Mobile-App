import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./style";
import ButtonRate from "../Button/ButtonRate";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../types/ProjectTypes";
import RatingWidget from "../Rating/RatingWidget";
export type RatingPageRouteProp = RouteProp<RootStackParamList, "Detail">;

export const Detail = () => {
  const route = useRoute<RatingPageRouteProp>();
  const {
    id,
    name,
    surname,
    image,
    email,
    description,
    reviews,
    grade,
    status,
  } = route.params;
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.contentContainer}>
        <View style={styles.FirstContent}>
          <Image source={{ uri: image }} style={styles.imageStyle} />
          <View style={styles.InfoParagraph}>
            <Text style={styles.nameText}>
              {status} {name} {surname}
            </Text>
            <Text style={styles.emailText}>{email}</Text>
            <RatingWidget
              setRating={grade}
              handleChange={function (newRating: number): void {
                throw new Error("Function not implemented.");
              }}
            />
          </View>
        </View>
        <View style={styles.SecondContent}>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
        <View style={styles.buttonView}>
          <ButtonRate
            nameBtn={"Rate"}
            person={{ id, name, surname, image, email, status }}
          />
        </View>
        <View style={styles.Reviews}>
          <Text>Recent Reviews</Text>
          {reviews &&
            reviews.map((review, idx) => (
              <Text key={idx} style={styles.reviewText}>
                {review}
              </Text>
            ))}
        </View>
      </View>
    </ScrollView>
  );
};
