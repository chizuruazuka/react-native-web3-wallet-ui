import React from "react";
import { ScrollView, Text, View } from "react-native";
import { assets } from "../data/assets";
import { ActionButton } from "../components/ActionButton";
import { AssetRow } from "../components/AssetRow";
import { SectionTitle } from "../components/SectionTitle";
import { MetricCard } from "../components/MetricCard";

export function HomeScreen({ colors, onNavigate }: { colors: any; onNavigate: (screen: string) => void }) {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 18, paddingBottom: 36 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <View>
          <Text style={{ color: colors.textMuted, fontSize: 13 }}>Good evening</Text>
          <Text style={{ color: colors.text, fontSize: 22, fontWeight: "800", marginTop: 2 }}>John</Text>
        </View>
        <View style={{
          width: 42, height: 42, borderRadius: 21, backgroundColor: colors.surface,
          borderWidth: 1, borderColor: colors.border, alignItems: "center", justifyContent: "center"
        }}>
          <Text style={{ color: colors.text, fontWeight: "800" }}>JE</Text>
        </View>
      </View>

      <View style={{
        marginTop: 22, backgroundColor: colors.surface, borderRadius: 24,
        borderWidth: 1, borderColor: colors.border, padding: 20
      }}>
        <Text style={{ color: colors.textMuted, fontSize: 12 }}>Total balance</Text>
        <Text style={{ color: colors.text, fontSize: 34, fontWeight: "900", marginTop: 8 }}>$9,847.48</Text>
        <Text style={{ color: colors.positive, fontSize: 13, fontWeight: "700", marginTop: 6 }}>+ $312.64 today</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 22 }}>
          <ActionButton icon="↑" label="Send" onPress={() => onNavigate("send")} colors={colors} />
          <ActionButton icon="↓" label="Receive" onPress={() => onNavigate("receive")} colors={colors} />
          <ActionButton icon="⇄" label="Swap" onPress={() => onNavigate("swap")} colors={colors} />
          <ActionButton icon="+" label="Buy" onPress={() => onNavigate("buy")} colors={colors} />
        </View>
      </View>

      <View style={{ flexDirection: "row", gap: 10, marginTop: 18 }}>
        <MetricCard label="Networks" value="6" hint="Multi-chain portfolio" colors={colors} />
        <MetricCard label="Pending" value="1" hint="Bridge confirmation" colors={colors} />
      </View>

      <View style={{ marginTop: 26 }}>
        <SectionTitle title="Your assets" action="Manage" colors={colors} />
        <View style={{
          backgroundColor: colors.surface, borderRadius: 20,
          borderWidth: 1, borderColor: colors.border, paddingHorizontal: 16
        }}>
          {assets.map((asset, index) => (
            <View key={asset.symbol}>
              <AssetRow asset={asset} colors={colors} />
              {index < assets.length - 1 ? <View style={{ height: 1, backgroundColor: colors.border }} /> : null}
            </View>
          ))}
        </View>
      </View>

      <View style={{ marginTop: 26 }}>
        <SectionTitle title="Recent activity" action="View all" colors={colors} />
        <View style={{
          backgroundColor: colors.surface, borderRadius: 20,
          borderWidth: 1, borderColor: colors.border, padding: 16
        }}>
          <Text style={{ color: colors.text, fontSize: 14, fontWeight: "700" }}>Bridge ETH → Base</Text>
          <Text style={{ color: colors.warning, fontSize: 12, marginTop: 5, fontWeight: "700" }}>Pending confirmation</Text>
          <Text style={{ color: colors.textMuted, fontSize: 12, marginTop: 8 }}>
            0.18 ETH • Estimated completion in ~2 min
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
