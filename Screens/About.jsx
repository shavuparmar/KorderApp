import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Linking,
} from "react-native";


export default function About() {
  const openLink = (url) => Linking.openURL(url);

  return (
    <View style={styles.container}>
     

      <ScrollView contentContainerStyle={styles.content}>
        {/* App Card */}
        <View style={styles.card}>
          <Text style={styles.appName}>Korder</Text>
          <Text style={styles.tagline}>
            Simple ordering, fast tracking, and clean management — all in one
            app.
          </Text>

          <View style={styles.row}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Version: 1.0.0</Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Build: Expo</Text>
            </View>
          </View>
        </View>

        {/* Features */}
        <View style={styles.card}>
          <Text style={styles.title}>What you can do</Text>

          <Feature text="Place orders quickly with a clean UI" />
          <Feature text="Track previous orders anytime" />
          <Feature text="Role based workflow (Admin / Staff / User ready)" />
          <Feature text="Offline-friendly flow (future ready)" />
        </View>

        {/* Developer / Contact */}
        <View style={styles.card}>
          <Text style={styles.title}>Developer</Text>
          <Text style={styles.text}>Built with React Native (Expo).</Text>

          <View style={styles.btnRow}>
            <Pressable
              style={({ pressed }) => [
                styles.btn,
                pressed && { opacity: 0.85 },
              ]}
              onPress={() => openLink("https://github.com/shavuparmar")}
            >
              <Text style={styles.btnText}>GitHub</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.btn,
                pressed && { opacity: 0.85 },
              ]}
              onPress={() => openLink("mailto:yourmail@gmail.com")}
            >
              <Text style={styles.btnText}>Email</Text>
            </Pressable>
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>© {new Date().getFullYear()} Korder</Text>
      </ScrollView>
    </View>
  );
}

function Feature({ text }) {
  return (
    <View style={styles.featureRow}>
      <Text style={styles.dot}>•</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3e5e5" },
  content: { padding: 14, paddingBottom: 28 },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
  },

  appName: { fontSize: 26, fontWeight: "800", color: "#0b2a33" },
  tagline: { marginTop: 6, fontSize: 14, color: "#34454c", lineHeight: 20 },

  row: { flexDirection: "row", gap: 10, marginTop: 12, flexWrap: "wrap" },
  badge: {
    backgroundColor: "#66c7ee",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },
  badgeText: { fontWeight: "700", color: "#06202a", fontSize: 12 },

  title: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0b2a33",
    marginBottom: 10,
  },

  featureRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  dot: { fontSize: 18, marginRight: 8, color: "#0b2a33", lineHeight: 20 },
  text: { fontSize: 14, color: "#34454c", lineHeight: 20, flex: 1 },

  btnRow: { flexDirection: "row", gap: 10, marginTop: 12, flexWrap: "wrap" },
  btn: {
    backgroundColor: "#98a0b3",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
  },
  btnText: { fontWeight: "800", color: "#0b2a33" },

  footer: { textAlign: "center", marginTop: 8, color: "#5c6b70" },
});
