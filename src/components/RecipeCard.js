import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { FlatList, HoverEffect } from "react-native-gesture-handler";
import { colors, recipeList } from "../../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RecipeCard = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginBottom: 40 }}>
      <FlatList
        data={recipeList}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("RecipeDetail", { item: item })}
            style={{
              backgroundColor: colors.COLOR_LIGHT,
              shadowColor: "black",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 7,
              borderRadius: 16,
              marginVertical: 16,
              alignItems: "center",
              paddingHorizontal: 8,
              paddingVertical: 26,
            }}
          >
            <Image
              source={item.image}
              style={{ width: 150, height: 150, resizeMode: "center" }}
            />
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              {item.name}
            </Text>
            <View style={{ flexDirection: "row", marginTop: 8 }}>
              <Text>{item.time}</Text>
              <Text> | </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ marginRight: 4 }}>{item.rating}</Text>
                <FontAwesome
                  name="star"
                  size={16}
                  color={colors.COLOR_PRIMARY}
                />
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default RecipeCard;
