import React from "react";
import { Pressable, Text, View } from "react-native";

export function ActionButton({
  icon, label, onPress, colors
}: {
  icon: string; label: string; onPress: () => void; colors: any
}) {
  return (
    <Pressable onPress={onPress} style={{ alignItems: "center", width: 72 }}>
      <View style={{
        width: 48, height: 48, borderRadius: 24,
        backgroundColor: colors.brandSoft,
        alignItems: "center", justifyContent: "center", marginBottom: 8
      }}>
        <Text style={{ color: colors.brand, fontSize: 20, fontWeight: "800" }}>{icon}</Text>
      </View>
      <Text style={{ color: colors.text, fontSize: 12, fontWeight: "700" }}>{label}</Text>
    </Pressable>
  );
}
