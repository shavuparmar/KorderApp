import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default class Notification extends Component {
  state = {
    notifications: [
      {
        id: "1",
        title: "Order Confirmed",
        message: "Your order ORD-1003 has been confirmed.",
        time: "2 min ago",
        type: "success",
        read: false,
      },
      {
        id: "2",
        title: "Order Pending",
        message: "Your order ORD-1004 is pending approval.",
        time: "1 hour ago",
        type: "warning",
        read: false,
      },
      {
        id: "3",
        title: "Order Delivered",
        message: "Your order ORD-1001 has been delivered.",
        time: "Yesterday",
        type: "info",
        read: true,
      },
      {
        id: "4",
        title: "Order Cancelled",
        message: "Your order ORD-0998 was cancelled.",
        time: "2 days ago",
        type: "danger",
        read: true,
      },
    ],
  };

  getIcon(type) {
    if (type === "success") return "checkmark-circle-outline";
    if (type === "warning") return "alert-circle-outline";
    if (type === "danger") return "close-circle-outline";
    return "information-circle-outline";
  }

  markAsRead = (id) => {
    this.setState((prev) => ({
      notifications: prev.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      ),
    }));
  };

  markAllRead = () => {
    this.setState((prev) => ({
      notifications: prev.notifications.map((n) => ({ ...n, read: true })),
    }));
  };

  renderItem = ({ item }) => {
    const icon = this.getIcon(item.type);

    return (
      <Pressable
        onPress={() => this.markAsRead(item.id)}
        style={({ pressed }) => [
          styles.card,
          !item.read && styles.unreadCard,
          pressed && { opacity: 0.85 },
        ]}
      >
        <View style={styles.iconBox}>
          <Ionicons name={icon} size={22} color="#0b2a33" />
        </View>

        <View style={{ flex: 1 }}>
          <View style={styles.row}>
            <Text style={styles.title} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>

          <Text style={styles.message} numberOfLines={2}>
            {item.message}
          </Text>

          {!item.read && <Text style={styles.unreadText}>Unread</Text>}
        </View>
      </Pressable>
    );
  };

  render() {
    const { notifications } = this.state;

    return (
      <SafeAreaView edges={["top"]} style={styles.safe}>
        <View style={styles.container}>
          {/* Top title bar (no Header component) */}
          <View style={styles.topBar}>
            <Text style={styles.pageTitle}>Notifications</Text>

            <Pressable
              onPress={this.markAllRead}
              style={({ pressed }) => [
                styles.markAllBtn,
                pressed && { opacity: 0.85 },
              ]}
            >
              <Text style={styles.markAllText}>Mark all</Text>
            </Pressable>
          </View>

          <FlatList
            data={notifications}
            keyExtractor={(item) => item.id}
            renderItem={this.renderItem}
            contentContainerStyle={{ paddingBottom: 20 }}
            ListEmptyComponent={
              <View style={{ padding: 16 }}>
                <Text style={{ color: "#4f6168", fontWeight: "700" }}>
                  No notifications yet.
                </Text>
              </View>
            }
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f3e5e5" },
  container: { flex: 1, backgroundColor: "#f3e5e5" },

  topBar: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  pageTitle: { fontSize: 24, fontWeight: "900", color: "#0b2a33" },

  markAllBtn: {
    backgroundColor: "#7fd0e3",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  markAllText: { fontWeight: "900", color: "#0b2a33", fontSize: 12 },

  card: {
    marginHorizontal: 16,
    marginBottom: 10,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 12,
    flexDirection: "row",
    gap: 10,
  },

  unreadCard: {
    borderWidth: 2,
    borderColor: "#7fd0e3",
  },

  iconBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#f3e5e5",
    alignItems: "center",
    justifyContent: "center",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
  },

  title: { flex: 1, fontSize: 14, fontWeight: "900", color: "#0b2a33" },
  time: { fontSize: 11, fontWeight: "700", color: "#6a7b81" },

  message: { marginTop: 4, fontSize: 12, fontWeight: "600", color: "#4f6168" },

  unreadText: {
    marginTop: 6,
    alignSelf: "flex-start",
    fontSize: 11,
    fontWeight: "900",
    color: "#0b2a33",
    backgroundColor: "#7fd0e3",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    overflow: "hidden",
  },
});