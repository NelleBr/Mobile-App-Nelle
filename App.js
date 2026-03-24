import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import ProductDetail from "./screens/ProductDetail";
import BlogDetail from "./screens/BlogDetail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#F3EEE7",
          },
          headerTintColor: "#222",
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: "#F3EEE7",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Maison Vintage" }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ title: "Product" }}
        />
        <Stack.Screen
          name="BlogDetail"
          component={BlogDetail}
          options={{ title: "Blog" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}