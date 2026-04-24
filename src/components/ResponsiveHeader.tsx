import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export function ResponsiveHeader({
  title,
  leftIcon = "☰",
  rightIcon = "⚙️",
}: {
  title: string;
  leftIcon?: string;
  rightIcon?: string;
}) {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={[styles.header, { paddingTop: Platform.OS === "android" ? insets.top : 0 }]}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.icon}>{leftIcon}</Text>
        </TouchableOpacity>

        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.icon}>{rightIcon}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: "#0066cc",
  },
  header: {
    height: 56,
    backgroundColor: "#0066cc",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  button: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "#fff",
    fontSize: 20,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});