import React from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import Header from "../Common/Header";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Reusable Header Component */}
      <Header
        title="Korder"
        notificationCount={3}
        onNotificationPress={() =>
          navigation.navigate("Notification")
        }
      />

      {/* Grid */}
      <View style={styles.grid}>
        <Card
          title="Place Order"
          icon="🛒"
          onPress={() => navigation.navigate("PlaceOrder")}
        />
        <Card
          title="Previous Order"
          icon="📋"
          onPress={() => navigation.navigate("PreviousOrders")}
        />

        <Card
          title="Place Order"
          icon="🛒"
          onPress={() => navigation.navigate("PlaceOrder")}
        />
        <Card
          title="Previous Order"
          icon="📋"
          onPress={() => navigation.navigate("PreviousOrders")}
        />

        <Card
          title="Place Order"
          icon="🛒"
          onPress={() => navigation.navigate("PlaceOrder")}
        />
        <Card
          title="Previous Order"
          icon="📋"
          onPress={() => navigation.navigate("PreviousOrders")}
        />
        <Card
          title="About"
          icon="📋"
          onPress={() => navigation.navigate("About")}
        />
        <Card
          title="Statement"
          icon="📋"
          onPress={() => navigation.navigate("Statement")}
        />
      </View>
    </View>
  );
}

function Card({ title, icon, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && { opacity: 0.85 }]}
    >
      <Text style={styles.cardIcon}>{icon}</Text>
      <Text style={styles.cardText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3e5e5" },

  grid: {
    flex: 1,
    padding: 14,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },

  card: {
    width: "48%",
    height: 150,
    backgroundColor: "#98a0b3",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cardIcon: { fontSize: 44, marginBottom: 8 },
  cardText: {
    fontSize: 13,
    fontWeight: "700",
    backgroundColor: "#66c7ee",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    overflow: "hidden",
    color: "#06202a",
  },
});