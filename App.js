import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Loader from "./Common/Loader";
import Navigation from "./Common/Navigation"; // adjust path

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Loader">
        <Stack.Screen name="Loader" component={Loader} />
        <Stack.Screen name="Main" component={Navigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}