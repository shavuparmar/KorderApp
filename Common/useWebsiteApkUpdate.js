import React, { useEffect } from "react";
import { Alert, Linking, Platform } from "react-native";
import * as Application from "expo-application";

export default function UpdateChecker() {
  useEffect(() => {
    const checkUpdate = async () => {
      try {
        // Only check on Android production builds
        if (Platform.OS !== "android") return;

        const currentVersion = Application.nativeApplicationVersion;

        // If running in Expo Go, this will be null
        if (!currentVersion) return;

      const response = await fetch("https://<YOUR_USERNAME>.github.io/korder-app/version.json");
        const data = await response.json();

        const latestVersion = data?.version;
        const apkUrl = data?.apkUrl;

        if (!latestVersion || !apkUrl) return;

        // Simple version compare
        if (currentVersion.trim() !== latestVersion.trim()) {
          Alert.alert(
            "Update Available 🚀",
            `New version ${latestVersion} is available.\n\nWould you like to update now?`,
            [
              { text: "Later", style: "cancel" },
              {
                text: "Update",
                onPress: () => Linking.openURL(apkUrl),
              },
            ]
          );
        }
      } catch (error) {
        // Silent fail (no internet or server error)
      }
    };

    checkUpdate();
  }, []);

  return null;
}