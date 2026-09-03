import React from "react";
import { Text, View } from "react-native";

export function MetricCard({ label, value, hint, colors }: { label: string; value: string; hint: string; colors: any }) {
  return (
    <View style={{
      flex: 1, backgroundColor: colors.surfaceAlt, borderRadius: 16,
      padding: 14, borderWidth: 1, borderColor: colors.border
    }}>
      <Text style={{ color: colors.textMuted, fontSize: 11, fontWeight: "700" }}>{label.toUpperCase()}</Text>
      <Text style={{ color: colors.text, fontSize: 18, fontWeight: "800", marginTop: 6 }}>{value}</Text>
      <Text style={{ color: colors.textMuted, fontSize: 11, marginTop: 4 }}>{hint}</Text>
    </View>
  );
}
