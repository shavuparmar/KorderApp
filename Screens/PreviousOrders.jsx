import React, { useMemo } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PreviousOrders() {
  // Example: user already ordered values (replace later with API / storage)
  const orderedItems = useMemo(
    () => [
      { id: "1", name: "Amul Gold 500 Ml", value: "2" },
      { id: "2", name: "Amul Taza 500 Ml", value: "1" },
      { id: "3", name: "Amul Gold 500 Ml", value: "3" },
      { id: "4", name: "Amul Taza 500 Ml", value: "0" },
      { id: "5", name: "Amul Gold 500 Ml", value: "1" },
      { id: "6", name: "Amul Taza 500 Ml", value: "4" },
      { id: "7", name: "Amul Gold 500 Ml", value: "2" },
      { id: "8", name: "Amul Taza 500 Ml", value: "1" },
    ],
    []
  );

  const renderRow = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.itemName} numberOfLines={1}>
        {item.name}
      </Text>

      {/* Readonly value box (not editable) */}
      <View style={styles.valueBox}>
        <Text style={styles.valueText}>{item.value}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView edges={["top"]} style={styles.safe}>
      <View style={styles.container}>
        {/* Title only (no header component) */}
        <Text style={styles.title}>View Order</Text>

        <FlatList
          data={orderedItems}
          keyExtractor={(i) => i.id}
          renderItem={renderRow}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={() => <View style={styles.sep} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f3e5e5" },
  container: { flex: 1, backgroundColor: "#f3e5e5" },

  title: {
    fontSize: 26,
    fontWeight: "900",
    color: "#0b2a33",
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 8,
  },

  listContent: {
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 16,
  },

  row: {
    backgroundColor: "rgba(255,255,255,0.35)",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  itemName: {
    flex: 1,
    fontSize: 12,
    fontWeight: "700",
    color: "#2c3a3f",
    paddingRight: 10,
  },

  valueBox: {
    width: 110,
    height: 32,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },

  valueText: {
    fontSize: 13,
    fontWeight: "800",
    color: "#0b2a33",
  },

  sep: { height: 10 },
});