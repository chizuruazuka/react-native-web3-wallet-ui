import React from "react";
import { Text, View } from "react-native";
import { Asset } from "../data/assets";

export function AssetRow({ asset, colors }: { asset: Asset; colors: any }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 14 }}>
      <View style={{
        width: 42, height: 42, borderRadius: 21, backgroundColor: colors.surfaceAlt,
        justifyContent: "center", alignItems: "center", marginRight: 12
      }}>
        <Text style={{ color: colors.text, fontWeight: "800", fontSize: 12 }}>{asset.symbol}</Text>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{ color: colors.text, fontSize: 15, fontWeight: "700" }}>{asset.name}</Text>
        <Text style={{ color: colors.textMuted, marginTop: 3, fontSize: 12 }}>{asset.amount} {asset.symbol}</Text>
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <Text style={{ color: colors.text, fontWeight: "700", fontSize: 15 }}>{asset.value}</Text>
        <Text style={{ color: asset.positive ? colors.positive : colors.negative, marginTop: 3, fontSize: 12, fontWeight: "700" }}>
          {asset.change}
        </Text>
      </View>
    </View>
  );
}
