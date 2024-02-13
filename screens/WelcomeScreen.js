import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image source={require("../assets/images/welcome1.png")} />
      <Text style={{ color: "#f96163", fontSize: 22, fontWeight: "bold" }}>
        40K+ Premium Recipes
      </Text>
      <Text
        style={{
          fontSize: 42,
          fontWeight: "bold",
          color: "#3c444c",
          marginTop: 44,
          marginBottom: 70,
        }}
      >
        Cook Like A Chef
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("RecipeList")}
        style={{
          backgroundColor: "#f96163",
          borderRadius: 18,
          paddingVertical: 18,
          width: 350,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
          Let's Go
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
