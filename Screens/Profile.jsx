import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default class Profile extends Component {
  state = {
    user: {
      name: "User Name",
      phone: "9999999999",
      role: "USER",
      email: "user@gmail.com",
    },
    stats: {
      totalOrders: 12,
      pending: 2,
      completed: 10,
    },
  };

  goTo = (screen) => {
    this.props.navigation?.navigate(screen);
  };

  render() {
    const { user, stats } = this.state;

    return (
      <SafeAreaView edges={["top"]} style={styles.safe}>
        <View style={styles.container}>
          {/* Top Card */}
          <View style={styles.topCard}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={34} color="#0b2a33" />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{user.name}</Text>
              <Text style={styles.subText}>{user.email}</Text>
              <Text style={styles.subText}>+91 {user.phone}</Text>
            </View>

            <View style={styles.roleBadge}>
              <Text style={styles.roleText}>{user.role}</Text>
            </View>
          </View>

          {/* Stats */}
          <View style={styles.statsRow}>
            <StatCard label="Orders" value={stats.totalOrders} />
            <StatCard label="Pending" value={stats.pending} />
            <StatCard label="Done" value={stats.completed} />
          </View>

          {/* Actions */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Account</Text>

            <ActionBtn
              icon="document-text-outline"
              title="Statement"
              onPress={() => this.goTo("Statement")}
            />

            <ActionBtn
              icon="time-outline"
              title="Previous Orders"
              onPress={() => this.goTo("PreviousOrders")}
            />
          </View>

          {/* Logout */}
          <Pressable
            onPress={() => alert("Logout")}
            style={({ pressed }) => [
              styles.logoutBtn,
              pressed && { opacity: 0.85 },
            ]}
          >
            <Ionicons name="log-out-outline" size={18} color="#ffffff" />
            <Text style={styles.logoutText}>Logout</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }
}

function StatCard({ label, value }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function ActionBtn({ icon, title, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.actionBtn,
        pressed && { opacity: 0.85 },
      ]}
    >
      <View style={styles.actionLeft}>
        <View style={styles.actionIcon}>
          <Ionicons name={icon} size={18} color="#0b2a33" />
        </View>
        <Text style={styles.actionText}>{title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color="#0b2a33" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f3e5e5",
  },

  container: {
    flex: 1,
    padding: 16,
  },

  topCard: {
    backgroundColor: "#7fd0e3",
    borderRadius: 16,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "rgba(255,255,255,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },

  name: { fontSize: 18, fontWeight: "900", color: "#0b2a33" },
  subText: { marginTop: 2, fontSize: 12, color: "#0b2a33", fontWeight: "600" },

  roleBadge: {
    backgroundColor: "rgba(255,255,255,0.55)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },
  roleText: { fontWeight: "900", color: "#0b2a33", fontSize: 12 },

  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 14,
  },

  statCard: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
  },
  statValue: { fontSize: 18, fontWeight: "900", color: "#0b2a33" },
  statLabel: { marginTop: 4, fontSize: 12, fontWeight: "700", color: "#5a6a70" },

  section: {
    marginTop: 16,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 14,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "900",
    color: "#0b2a33",
    marginBottom: 10,
  },

  actionBtn: {
    paddingVertical: 12,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  actionLeft: { flexDirection: "row", alignItems: "center", gap: 10 },

  actionIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: "#f3e5e5",
    alignItems: "center",
    justifyContent: "center",
  },

  actionText: { fontSize: 13, fontWeight: "800", color: "#0b2a33" },

  logoutBtn: {
    marginTop: 16,
    backgroundColor: "#0b2a33",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },

  logoutText: { color: "#ffffff", fontWeight: "900" },
});