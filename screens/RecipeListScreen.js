import { View, Text } from "react-native";
import React from "react";
import Header from "../src/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchFilter from "../src/components/SearchFilter";
import CategoriesFilter from "../src/components/CategoriesFilter";
import RecipeCard from "../src/components/RecipeCard";

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      {/* Render header */}
      <Header headerText={"Hi,Hasan"} headerIcon={"bell-o"} />
      {/* Search Filter */}
      <SearchFilter icon={"search"} placholder={"enter your  fav recipe"} />

      {/* Ctaegories Filter */}
      <View style={{ marginTop: 22 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
        {/* Categgories List */}
        <CategoriesFilter />
      </View>

      {/* Recipe List Filter */}
      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>
        {/* Recipe List */}
        <RecipeCard />
      </View>
    </SafeAreaView>
  );
};

export default RecipeListScreen;
