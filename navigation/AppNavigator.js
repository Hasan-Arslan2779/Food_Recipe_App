import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// Screens
import RecipeListScreen from "../screens/RecipeListScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecipeList"
          component={RecipeListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecipeDetail"
          component={RecipeDetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
