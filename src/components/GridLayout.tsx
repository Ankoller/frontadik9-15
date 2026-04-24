import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

export function GridLayout({
  children,
  columns = 2,
  spacing = 12,
}: {
  children: React.ReactNode;
  columns?: number;
  spacing?: number;
}) {
  const { width } = useWindowDimensions();
  const itemWidth = (width - spacing * (columns + 1)) / columns;
  const items = React.Children.toArray(children);

  return (
    <View style={[styles.grid, { padding: spacing }]}>
      {items.map((item, index) => (
        <View
          key={index}
          style={{
            width: itemWidth,
            marginRight: (index + 1) % columns === 0 ? 0 : spacing,
            marginBottom: spacing,
          }}
        >
          {item}
        </View>
      ))}
    </View>
  );
}

export function Card({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  subtitle: {
    color: "#666",
    marginTop: 6,
  },
});