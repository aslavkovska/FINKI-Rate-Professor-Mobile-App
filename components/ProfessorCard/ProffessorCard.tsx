import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList, TCard } from "../../types/ProjectTypes";
import ButtonRate from "../Button/ButtonRate";

const Card = ({
  id,
  name,
  surname,
  image,
  email,
  description,
  navigation,
  reviews,
  grade,
  status
}: TCard & { navigation: NavigationProp<RootStackParamList> }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate("Detail", {
            id,
            name,
            surname,
            image,
            description,
            email,
            reviews,
            grade,
            status
          })
        }
      >
        <Image source={{ uri: image }} style={styles.cardImage} />
        <Text style={styles.cardText}>{status}{`${name} ${surname}`}</Text>
        <View>
          <ButtonRate
            nameBtn={"Rate"}
            person={{
              id,
              name,
              surname,
              image,
              email,
              status
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
