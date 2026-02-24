import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Alert,
} from "react-native";

export default class Statement extends Component {
  state = {
    user: {
      name: "User",
      phone: "9999999999",
    },

    // Dummy statement data (replace with API later)
    statements: [
      {
        id: "ORD-1001",
        date: "20 Feb 2026",
        items: 6,
        amount: 420,
        status: "Completed",
      },
      {
        id: "ORD-1002",
        date: "21 Feb 2026",
        items: 3,
        amount: 180,
        status: "Pending",
      },
      {
        id: "ORD-1003",
        date: "23 Feb 2026",
        items: 10,
        amount: 780,
        status: "Completed",
      },
      {
        id: "ORD-1004",
        date: "24 Feb 2026",
        items: 2,
        amount: 120,
        status: "Cancelled",
      },
    ],
  };

  getSummary() {
    const { statements } = this.state;

    const totalOrders = statements.length;

    const totalItems = statements.reduce((sum, s) => sum + s.items, 0);

    const totalAmount = statements
      .filter((s) => s.status !== "Cancelled")
      .reduce((sum, s) => sum + s.amount, 0);

    return { totalOrders, totalItems, totalAmount };
  }

  renderRow = ({ item }) => {
    const badgeStyle =
      item.status === "Completed"
        ? styles.completed
        : item.status === "Pending"
        ? styles.pending
        : styles.cancelled;

    return (
      <Pressable
        onPress={() =>
          Alert.alert("Order Details", `${item.id}\nDate: ${item.date}\nItems: ${item.items}\nAmount: ₹${item.amount}\nStatus: ${item.status}`)
        }
        style={({ pressed }) => [styles.row, pressed && { opacity: 0.85 }]}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.orderId}>{item.id}</Text>
          <Text style={styles.smallText}>{item.date}</Text>
          <Text style={styles.smallText}>Items: {item.items}</Text>
        </View>

        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.amount}>₹ {item.amount}</Text>
          <Text style={[styles.status, badgeStyle]}>{item.status}</Text>
        </View>
      </Pressable>
    );
  };

  render() {
    const { user } = this.state;
    const { totalOrders, totalItems, totalAmount } = this.getSummary();

    return (
      <View style={styles.container}>
        {/* Title (no header component) */}
        <Text style={styles.title}>Statement</Text>
        <Text style={styles.subTitle}>
          {user.name} • {user.phone}
        </Text>

        {/* Summary Cards */}
        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{totalOrders}</Text>
            <Text style={styles.summaryLabel}>Orders</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{totalItems}</Text>
            <Text style={styles.summaryLabel}>Items</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>₹{totalAmount}</Text>
            <Text style={styles.summaryLabel}>Total</Text>
          </View>
        </View>

        {/* List */}
        <Text style={styles.sectionTitle}>Your Orders</Text>

        <FlatList
          data={this.state.statements}
          keyExtractor={(item) => item.id}
          renderItem={this.renderRow}
          contentContainerStyle={{ paddingBottom: 30 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3e5e5", padding: 16 },

  title: { fontSize: 28, fontWeight: "900", color: "#0b2a33" },
  subTitle: { marginTop: 4, color: "#4f6168", fontWeight: "600" },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
    marginBottom: 16,
    gap: 10,
  },

  summaryCard: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
  },

  summaryValue: { fontSize: 18, fontWeight: "900", color: "#0b2a33" },
  summaryLabel: { marginTop: 4, fontSize: 12, color: "#5a6a70", fontWeight: "700" },

  sectionTitle: { fontSize: 16, fontWeight: "900", color: "#0b2a33", marginBottom: 10 },

  row: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  orderId: { fontSize: 15, fontWeight: "900", color: "#0b2a33" },
  smallText: { marginTop: 3, fontSize: 12, color: "#586b71", fontWeight: "600" },

  amount: { fontSize: 15, fontWeight: "900", color: "#0b2a33" },

  status: {
    marginTop: 6,
    fontSize: 11,
    fontWeight: "900",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    overflow: "hidden",
    textAlign: "center",
  },

  completed: { backgroundColor: "#c8f7d2", color: "#1b7f3b" },
  pending: { backgroundColor: "#ffe5b4", color: "#b36b00" },
  cancelled: { backgroundColor: "#ffd2d2", color: "#a10000" },
});