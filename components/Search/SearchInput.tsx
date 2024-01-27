import React from "react";
import { TextInput, View } from "react-native";
import { styles } from "./styles";
import { TSearch } from "../../types/ProjectTypes";


const SearchInput = ({ handleChange, valueInput }: TSearch) => {
  return (
    <View>
      <TextInput
        value={valueInput}
        placeholder="search..."
        onChangeText={handleChange} 
        style={styles.input}
        placeholderTextColor={'white'}
      />
    </View>
  );
};

export default SearchInput;
