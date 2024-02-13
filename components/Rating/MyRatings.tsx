import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { RatingStyles } from "./RatingStyle";
import axios from "axios";
import { TCard } from "../../types/ProjectTypes";
import RatingWidget from "./RatingWidget";
import { TouchableOpacity } from "react-native";

const MyRatings = () => {
  const [myrating, setMyRating] = useState<TCard[]>([]);
  // console.log('this are all that are rated: ', )
  const ratedProfessors = myrating.sort((a,b) => b.grade - a.grade).filter((professor) => professor.grade);
  console.log('this are the sorted proffesors', ratedProfessors)

  useEffect(() => {
    axios
      .get(`${process.env.EXPO_PUBLIC_API_URL}/professors`)
      .then((response) => {
        setMyRating(response.data);
      });
  }, []);
  return (
    <ScrollView style={{ flex: 2 }}>
      <View style={RatingStyles.myRatings}>
        {/* <Card /> */}
        {ratedProfessors.map((professorCard) => (
          <View key={professorCard.id} style={RatingStyles.ratedCard}>
            <Image
              source={{ uri: professorCard.image }}
              style={RatingStyles.cardImage}
            />
            <Text style={RatingStyles.cardText}>
              {professorCard.status} {professorCard.name} {professorCard.surname}
            </Text>
            <Text style={RatingStyles.cardText}>{professorCard.email}</Text>
            <RatingWidget
              setRating={professorCard.grade}
              handleChange={() => {
                console.log("everything ok");
              }}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default MyRatings;
