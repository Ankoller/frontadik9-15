import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GridLayout, Card } from "./src/components/GridLayout";
import { ResponsiveHeader } from "./src/components/ResponsiveHeader";
import { AdaptiveLayout, FeatureCard, StatsRow } from "./src/components/AdaptiveLayout";

export default function App() {
  return (
    <SafeAreaProvider>
      <ResponsiveHeader title="Lab 12 Responsive Layout" />

      <AdaptiveLayout>
        <StatsRow />

        <GridLayout columns={2}>
          <Card title="Flexbox" subtitle="Responsive grid layout" />
          <Card title="Safe Area" subtitle="Works with notches" />
          <Card title="Adaptive" subtitle="Phone and tablet support" />
          <Card title="Expo" subtitle="React Native styling" />
        </GridLayout>

        <FeatureCard
          icon="📱"
          title="Mobile First"
          description="Layout adapts to different phone and tablet screen sizes."
        />

        <FeatureCard
          icon="🧩"
          title="Reusable Components"
          description="GridLayout, ResponsiveHeader, and AdaptiveLayout are separated."
        />
      </AdaptiveLayout>
    </SafeAreaProvider>
  );
}