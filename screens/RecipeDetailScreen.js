import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

const RecipeDetailScreen = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <View style={{ backgroundColor: item.color, flex: 1 }}>
      <SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16 }}>
        <Pressable onPress={() => navigation.goBack()} style={{ flex: 1 }}>
          <FontAwesome name="arrow-circle-left" size={28} color={"white"} />
        </Pressable>

        <FontAwesome name="heart-o" size={28} color={"white"} />
      </SafeAreaView>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          marginTop: 160,
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            height: 300,
            width: 300,
            position: "absolute",
            top: -150,
          }}
        >
          <Image
            source={item.image}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>

        {/* Reccipe Name */}
        <Text style={{ marginTop: 160, fontWeight: "bold", fontSize: 28 }}>
          {item.name}
        </Text>
        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Recipe Description */}
            <Text style={{ fontSize: 20, marginVertical: 16 }}>
              {item.description}
            </Text>

            {/* Recipe Extra details */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View
                style={{
                  backgroundColor: "rgba(255, 0, 0, 0.38)",
                  paddingHorizontal: 16,
                  borderRadius: 8,
                  paddingVertical: 26,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 40 }}>⏰</Text>
                <Text style={{ fontSize: 20, fontWeight: "400" }}>
                  {item.time}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "rgba(135, 206, 235, 0.8)",
                  paddingHorizontal: 16,
                  borderRadius: 8,
                  paddingVertical: 26,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 40 }}>🥘</Text>
                <Text style={{ fontSize: 20, fontWeight: "400" }}>
                  {item.difficulty}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "rgba(255, 165, 0, 0.48)",
                  paddingHorizontal: 16,
                  borderRadius: 8,
                  paddingVertical: 26,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 40 }}>🔥</Text>
                <Text style={{ fontSize: 20, fontWeight: "400" }}>
                  {item.time}
                </Text>
              </View>
            </View>
            {/* Recipe Ingredients */}

            <View
              style={{
                alignSelf: "flex-start",
                marginVertical: 22,
                marginBottom: 6,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "600" }}>
                Ingredients:
              </Text>
              {item.ingredients.map((ingredient) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 4,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "red",
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                      }}
                    ></View>
                    <Text style={{ fontSize: 18, marginLeft: 6 }}>
                      {ingredient}
                    </Text>
                  </View>
                );
              })}
            </View>

            {/* Recipe Steps */}

            <View
              style={{
                alignSelf: "flex-start",
                marginVertical: 12,
                paddingVertical: 18,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "600" }}>Steps:</Text>
              {item.steps.map((step, index) => {
                return (
                  <Text
                    style={{ fontSize: 18, marginLeft: 6, marginVertical: 6 }}
                  >{`${index + 1}). ${step}`}</Text>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default RecipeDetailScreen;
