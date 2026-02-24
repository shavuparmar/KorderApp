import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import PlaceOrder from "../Screens/PlaceOrder";
import PreviousOrders from "../Screens/PreviousOrders";
import About from "../Screens/About";
import Statement from "../Screens/Statement";
import Notification from "../Screens/Notification";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#7fd0e3",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={Tabs} />

      {/* Extra pages */}
      <Stack.Screen name="PlaceOrder" component={PlaceOrder} options={{ headerShown: true, title: "Place Order" }} />
      <Stack.Screen name="PreviousOrders" component={PreviousOrders} options={{ headerShown: true, title: "Previous Orders" }} />
      <Stack.Screen name="About" component={About} options={{ headerShown: true, title: "About" }} />
      <Stack.Screen name="Statement" component={Statement} options={{ headerShown: true, title: "Statement" }} />
      <Stack.Screen name="Notification" component={Notification} options={{ headerShown: true, title: "Notifications" }} />
    </Stack.Navigator>
  );
}