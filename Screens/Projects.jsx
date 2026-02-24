import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, Linking } from "react-native";

const GITHUB_USERNAME = "YOUR_GITHUB_USERNAME";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadRepos() {
      try {
        setLoading(true);
        setErr("");

        const res = await fetch(`https://api.github.com/users/${shavuparmar}/repos?sort=updated`);
        if (!res.ok) throw new Error("GitHub API error");

        const data = await res.json();
        if (isMounted) setRepos(data);
      } catch (e) {
        if (isMounted) setErr("Failed to load repos. Check username or internet.");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadRepos();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 10 }}>Loading repos...</Text>
      </View>
    );
  }

  if (err) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "red" }}>{err}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My GitHub Repos</Text>

      <FlatList
        data={repos}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => Linking.openURL(item.html_url)}
            activeOpacity={0.8}
          >
            <Text style={styles.repoName}>{item.name}</Text>
            {!!item.description && <Text style={styles.desc}>{item.description}</Text>}
            <Text style={styles.meta}>⭐ {item.stargazers_count}   🍴 {item.forks_count}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  card: {
    padding: 14,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    marginBottom: 12,
  },
  repoName: { fontSize: 16, fontWeight: "bold" },
  desc: { marginTop: 6, color: "#444" },
  meta: { marginTop: 8, color: "#666" },
});