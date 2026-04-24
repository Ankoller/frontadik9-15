import React from "react";
import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from "react-native";

export function AdaptiveLayout({ children }: { children: React.ReactNode }) {
  const { width, height } = useWindowDimensions();
  const isTablet = width >= 768;
  const isLandscape = width > height;

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View
        style={[
          styles.container,
          isTablet && styles.tablet,
          isLandscape && styles.landscape,
        ]}
      >
        {children}
      </View>
    </ScrollView>
  );
}

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <View style={styles.feature}>
      <Text style={styles.featureIcon}>{icon}</Text>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureText}>{description}</Text>
    </View>
  );
}

export function StatsRow() {
  return (
    <View style={styles.stats}>
      <View>
        <Text style={styles.value}>12</Text>
        <Text style={styles.label}>Screens</Text>
      </View>
      <View>
        <Text style={styles.value}>3</Text>
        <Text style={styles.label}>Layouts</Text>
      </View>
      <View>
        <Text style={styles.value}>100%</Text>
        <Text style={styles.label}>Responsive</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    padding: 16,
  },
  container: {
    gap: 16,
  },
  tablet: {
    paddingHorizontal: 32,
  },
  landscape: {
    flexDirection: "column",
  },
  feature: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    elevation: 3,
  },
  featureIcon: {
    fontSize: 32,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 8,
  },
  featureText: {
    color: "#666",
    textAlign: "center",
    marginTop: 6,
  },
  stats: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    elevation: 2,
  },
  value: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0066cc",
    textAlign: "center",
  },
  label: {
    color: "#666",
    textAlign: "center",
  },
});