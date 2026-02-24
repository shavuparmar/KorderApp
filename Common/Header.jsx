import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header({
  title = "Korder",
  onNotificationPress,
  onBackPress,
  showBack = false,
  notificationCount = 0,
}) {
  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <View style={styles.container}>
        {/* Left Section */}
        <View style={styles.leftSection}>
          {showBack && (
            <Pressable
              onPress={onBackPress}
              style={({ pressed }) => [
                styles.backBtn,
                pressed && { opacity: 0.7 },
              ]}
            >
              <Ionicons name="arrow-back" size={20} color="#0b2a33" />
            </Pressable>
          )}

          <Text style={styles.logo}>{title}</Text>
        </View>

        {/* Right Notification */}
        {onNotificationPress && (
          <Pressable
            onPress={onNotificationPress}
            style={({ pressed }) => [
              styles.notificationBtn,
              pressed && { opacity: 0.7 },
            ]}
          >
            <Ionicons
              name="notifications-outline"
              size={22}
              color="#0b2a33"
            />

            {/* Badge */}
            {notificationCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>
                  {notificationCount > 9 ? "9+" : notificationCount}
                </Text>
              </View>
            )}
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#7fd0e3",
  },

  container: {
    height: 60,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  logo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0b2a33",
  },

  backBtn: {
    padding: 6,
  },

  notificationBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.4)",
    alignItems: "center",
    justifyContent: "center",
  },

  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#ff3b30",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    minWidth: 18,
    alignItems: "center",
  },

  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
});