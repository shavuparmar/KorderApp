import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

// All the Routes are imported here
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
    <NavigationContainer>
      <Stack.Navigator>
        {/* Bottom tabs */}
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />

        {/* Extra pages (opened from Home) */}
        <Stack.Screen
          name="PlaceOrder"
          component={PlaceOrder}
          options={{ title: "Place Order" }}
        />
        <Stack.Screen
          name="PreviousOrders"
          component={PreviousOrders}
          options={{ title: "Previous Orders" }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{ title: "About" }}
        />
        <Stack.Screen
          name="Statement"
          component={Statement}
          options={{ title: "Statement" }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ title: "Notifications" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
