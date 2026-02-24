import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Animated,
  Easing,
} from "react-native";

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.pulse = new Animated.Value(0);
  }

  componentDidMount() {
    this.startPulse();
  }
  componentDidMount() {
    this.startPulse();

    setTimeout(() => {
      this.props.navigation.replace("Main");
    }, 1500); // 2.5 seconds
  }
  startPulse = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.pulse, {
          toValue: 1,
          duration: 700,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(this.pulse, {
          toValue: 0,
          duration: 700,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  render() {
    const scale = this.pulse.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1.08],
    });

    const opacity = this.pulse.interpolate({
      inputRange: [0, 1],
      outputRange: [0.7, 1],
    });

    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.card, { transform: [{ scale }], opacity }]}
        >
          <Text style={styles.logo}>Korder</Text>

          <ActivityIndicator size="large" color="#2563EB" />

          <Text style={styles.text}>Loading, please wait</Text>

          {/* Animated dots */}
          <View style={styles.dotsRow}>
            <Dot delay={0} />
            <Dot delay={150} />
            <Dot delay={300} />
          </View>
        </Animated.View>
      </View>
    );
  }
}

/** Small animated dot component */
class Dot extends Component {
  constructor(props) {
    super(props);
    this.anim = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.delay(this.props.delay || 0),
        Animated.timing(this.anim, {
          toValue: 1,
          duration: 350,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(this.anim, {
          toValue: 0,
          duration: 350,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }

  render() {
    const translateY = this.anim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -6],
    });

    const opacity = this.anim.interpolate({
      inputRange: [0, 1],
      outputRange: [0.35, 1],
    });

    return (
      <Animated.View
        style={[styles.dot, { transform: [{ translateY }], opacity }]}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1220", // dark background
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  card: {
    width: "100%",
    maxWidth: 320,
    backgroundColor: "#111A2E",
    borderRadius: 18,
    paddingVertical: 28,
    paddingHorizontal: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  logo: {
    fontSize: 26,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 18,
    letterSpacing: 0.6,
  },
  text: {
    marginTop: 14,
    fontSize: 14,
    color: "rgba(255,255,255,0.75)",
  },
  dotsRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 14,
    height: 14,
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: "#60A5FA",
  },
});
