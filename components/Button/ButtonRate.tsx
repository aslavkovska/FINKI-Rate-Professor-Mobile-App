import React, { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList, TBTNRATE } from "../../types/ProjectTypes";

const ButtonRate = ({ nameBtn, person }: TBTNRATE) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const RateProfessor = useCallback(() => {
    navigation.navigate("RatingPage", person);
  }, [navigation, person]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={RateProfessor} style={styles.buttonStyle}>
        <Text style={styles.buttonText}>{nameBtn}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonRate;
