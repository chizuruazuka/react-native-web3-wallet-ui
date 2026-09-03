import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

type Stage = "form" | "review" | "success";

export function SendScreen({ colors, onBack }: { colors: any; onBack: () => void }) {
  const [stage, setStage] = useState<Stage>("form");
  const [amount, setAmount] = useState("0.25");
  const [address, setAddress] = useState("0x7A1e...91B4");

  if (stage === "success") {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background, padding: 24, justifyContent: "center" }}>
        <View style={{
          backgroundColor: colors.surface, borderRadius: 24, padding: 24,
          borderWidth: 1, borderColor: colors.border, alignItems: "center"
        }}>
          <View style={{
            width: 70, height: 70, borderRadius: 35, backgroundColor: colors.brandSoft,
            alignItems: "center", justifyContent: "center"
          }}>
            <Text style={{ color: colors.positive, fontSize: 34, fontWeight: "900" }}>✓</Text>
          </View>
          <Text style={{ color: colors.text, fontSize: 24, fontWeight: "900", marginTop: 18 }}>Transaction submitted</Text>
          <Text style={{ color: colors.textMuted, textAlign: "center", marginTop: 10, lineHeight: 20 }}>
            Your transfer is pending network confirmation. You can safely leave this screen.
          </Text>
          <Pressable onPress={onBack} style={{ marginTop: 24, backgroundColor: colors.brand, borderRadius: 16, paddingVertical: 14, paddingHorizontal: 26 }}>
            <Text style={{ color: "#FFFFFF", fontWeight: "800" }}>Back to wallet</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, paddingHorizontal: 20, paddingTop: 18 }}>
      <Pressable onPress={onBack}>
        <Text style={{ color: colors.brand, fontWeight: "800" }}>← Wallet</Text>
      </Pressable>

      <Text style={{ color: colors.text, fontSize: 28, fontWeight: "900", marginTop: 20 }}>
        {stage === "form" ? "Send ETH" : "Review transfer"}
      </Text>

      {stage === "form" ? (
        <View style={{ marginTop: 24 }}>
          <Text style={{ color: colors.textMuted, fontSize: 12, fontWeight: "700" }}>RECIPIENT</Text>
          <TextInput
            value={address}
            onChangeText={setAddress}
            placeholder="0x..."
            placeholderTextColor={colors.textMuted}
            style={{
              marginTop: 8, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border,
              borderRadius: 16, color: colors.text, padding: 16, fontSize: 15
            }}
          />

          <Text style={{ color: colors.textMuted, fontSize: 12, fontWeight: "700", marginTop: 20 }}>AMOUNT</Text>
          <TextInput
            value={amount}
            onChangeText={setAmount}
            keyboardType="decimal-pad"
            style={{
              marginTop: 8, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border,
              borderRadius: 16, color: colors.text, padding: 16, fontSize: 26, fontWeight: "800"
            }}
          />

          <View style={{
            marginTop: 18, backgroundColor: colors.surfaceAlt, borderRadius: 16,
            borderWidth: 1, borderColor: colors.border, padding: 14
          }}>
            <Text style={{ color: colors.text, fontWeight: "700" }}>Network</Text>
            <Text style={{ color: colors.textMuted, marginTop: 4 }}>Ethereum Mainnet</Text>
          </View>

          <Pressable onPress={() => setStage("review")} style={{
            marginTop: 28, backgroundColor: colors.brand, borderRadius: 16,
            paddingVertical: 15, alignItems: "center"
          }}>
            <Text style={{ color: "#FFFFFF", fontWeight: "900" }}>Continue</Text>
          </Pressable>
        </View>
      ) : (
        <View style={{ marginTop: 24 }}>
          {[
            ["You send", `${amount} ETH`],
            ["To", address],
            ["Network fee", "~$2.18"],
            ["Estimated time", "~30 seconds"]
          ].map(([label, value]) => (
            <View key={label} style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: colors.border }}>
              <Text style={{ color: colors.textMuted }}>{label}</Text>
              <Text style={{ color: colors.text, fontWeight: "700", maxWidth: "58%" }}>{value}</Text>
            </View>
          ))}

          <View style={{ backgroundColor: colors.surfaceAlt, borderRadius: 16, padding: 14, marginTop: 18 }}>
            <Text style={{ color: colors.warning, fontWeight: "800" }}>Check the address carefully</Text>
            <Text style={{ color: colors.textMuted, marginTop: 6, lineHeight: 19 }}>
              Blockchain transfers are irreversible after confirmation.
            </Text>
          </View>

          <Pressable onPress={() => setStage("success")} style={{
            marginTop: 24, backgroundColor: colors.brand, borderRadius: 16,
            paddingVertical: 15, alignItems: "center"
          }}>
            <Text style={{ color: "#FFFFFF", fontWeight: "900" }}>Confirm & send</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}
