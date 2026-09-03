import React from "react";
import { Text, View } from "react-native";

export function SectionTitle({ title, action, colors }: { title: string; action?: string; colors: any }) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
      <Text style={{ color: colors.text, fontSize: 18, fontWeight: "700" }}>{title}</Text>
      {action ? <Text style={{ color: colors.brand, fontSize: 13, fontWeight: "700" }}>{action}</Text> : null}
    </View>
  );
}
