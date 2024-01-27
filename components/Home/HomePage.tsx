import React, { useEffect, useState, useCallback } from "react";
import { FlatList, View } from "react-native";
import axios from "axios";
import { NavigationProp, useIsFocused, useNavigation } from "@react-navigation/native";
import Card from "../ProfessorCard/ProffessorCard";
import PopularCard from "../ProfessorCard/PopularCard";
import SearchInput from "../Search/SearchInput";
import { styles } from "./styles";
import { RootStackParamList, TCard } from "../../types/ProjectTypes";
type ProfessorSort = {
  grade:number
}
const HomePage = () => {
  const [searchedVal, setSearchVal] = useState("");
  const [data, setData] = useState<TCard[]>([]);
  const [filteredData, setFilteredData] = useState<TCard[]>([]);
  const [highGradePerson, setHighGradePerson] = useState<TCard | null>(null);
  const isFocused = useIsFocused();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const api_url = `${process.env.EXPO_PUBLIC_API_URL}/professors`;
  console.log('all professors', api_url)
  const fetchData = useCallback(() => {
    axios
      .get(api_url)
      .then((response) => {
        const sortedData = response.data.sort((a:ProfessorSort, b:ProfessorSort) => b.grade - a.grade);
        setData(sortedData);
        setFilteredData(sortedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [api_url]);

  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused, fetchData]);

  useEffect(() => {
    const mostPopular = data.find((person) => person.grade >= 4.0 && person.grade <= 5.0) || null;
    setHighGradePerson(mostPopular);
  }, [data]);

  useEffect(() => {
    const filtered = data.filter((item) =>
      `${item.name} ${item.surname}`.toLowerCase().includes(searchedVal.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchedVal, data]);


  const searchProf = (text:any) => {
    setSearchVal(text)
  }
  return (
    <View style={styles.HomePage}>
      {highGradePerson && (
        <PopularCard
          id={highGradePerson.id}
          imageUrl={highGradePerson.image}
          name={highGradePerson.name}
          surname={highGradePerson.surname}
          navigation={navigation}
          grade={highGradePerson.grade}
          email={highGradePerson.email}
          status={highGradePerson.status}
        />
      )}
      <SearchInput handleChange={searchProf} valueInput={searchedVal} />
      <FlatList
        contentContainerStyle={styles.flatListContentContainer}
        data={filteredData}
        style={styles.flatList}
        renderItem={({ item }) => <Card {...item} navigation={navigation} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        initialNumToRender={10} 
      />
    </View>
  );
};

export default HomePage;
