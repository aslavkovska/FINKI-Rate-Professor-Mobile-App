import React from "react";
import { View } from "react-native";
import StarRating from "react-native-star-rating-widget";
import { TRWidget } from "../../types/ProjectTypes";


const RatingWidget = ({ setRating, handleChange }: TRWidget) => {
  return (
    <View>
      <StarRating color="white" rating={setRating} onChange={handleChange} />
    </View>
  );
};

export default RatingWidget;
