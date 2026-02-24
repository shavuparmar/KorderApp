import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PlaceOrder({ navigation }) {
  const items = useMemo(
    () => [
      { id: "1", name: "Amul Gold 500 Ml" },
      { id: "2", name: "Amul Taza 500 Ml" },
      { id: "3", name: "Amul Gold 500 Ml" },
      { id: "4", name: "Amul Taza 500 Ml" },
      { id: "5", name: "Amul Gold 500 Ml" },
      { id: "6", name: "Amul Taza 500 Ml" },
      { id: "7", name: "Amul Gold 500 Ml" },
      { id: "8", name: "Amul Taza 500 Ml" },
      { id: "9", name: "Amul Gold 500 Ml" },
      { id: "10", name: "Amul Taza 500 Ml" },
    ],
    [],
  );

  // store quantity/value for each item id
  const [values, setValues] = useState({});

  const setItemValue = (id, val) => {
    setValues((prev) => ({ ...prev, [id]: val }));
  };

  const renderRow = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.itemName} numberOfLines={1}>
        {item.name}
      </Text>

      <TextInput
        value={values[item.id] ?? ""}
        onChangeText={(t) => setItemValue(item.id, t)}
        placeholder="Enter Value"
        placeholderTextColor="#666"
        keyboardType="numeric"
        style={styles.input}
      />
    </View>
  );

  return (
    <SafeAreaView edges={["top"]} style={styles.safe}>
      <View style={styles.container}>
        {/* Top Bar */}
        <View style={styles.topBar}>
          <Text style={styles.title}>Place Your Order</Text>
        </View>

        {/* List */}
        <FlatList
          data={items}
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

  topBar: {
    backgroundColor: "#7fd0e3",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    alignSelf: "flex-start",
    backgroundColor: "rgba(255,255,255,0.45)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },

  backText: { fontSize: 14, fontWeight: "700", color: "#0b2a33" },

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

  input: {
    width: 110,
    height: 32,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 12,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  sep: { height: 10 },
  title: {
    fontSize: 26, // bigger text
    fontWeight: "800", // bold
    color: "#0b2a33",
    marginVertical: 12,
    
  },
});
