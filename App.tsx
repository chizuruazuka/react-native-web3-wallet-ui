import React, { useMemo, useState } from "react";
import { Pressable, SafeAreaView, Text, View, useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { themes, ThemeMode } from "./src/theme";
import { HomeScreen } from "./src/screens/HomeScreen";
import { SendScreen } from "./src/screens/SendScreen";

export default function App() {
  const system = useColorScheme();
  const [manualTheme, setManualTheme] = useState<ThemeMode | null>(null);
  const [screen, setScreen] = useState("home");

  const mode: ThemeMode = manualTheme ?? (system === "light" ? "light" : "dark");
  const colors = useMemo(() => themes[mode], [mode]);

  const toggleTheme = () => setManualTheme(mode === "dark" ? "light" : "dark");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style={mode === "dark" ? "light" : "dark"} />

      <View style={{
        paddingHorizontal: 20, paddingTop: 6, paddingBottom: 8,
        flexDirection: "row", justifyContent: "flex-end"
      }}>
        <Pressable onPress={toggleTheme} style={{
          backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 1,
          borderRadius: 999, paddingHorizontal: 12, paddingVertical: 7
        }}>
          <Text style={{ color: colors.text, fontSize: 12, fontWeight: "800" }}>
            {mode === "dark" ? "Light mode" : "Dark mode"}
          </Text>
        </Pressable>
      </View>

      {screen === "send" ? (
        <SendScreen colors={colors} onBack={() => setScreen("home")} />
      ) : (
        <HomeScreen colors={colors} onNavigate={(next) => setScreen(next === "send" ? "send" : "home")} />
      )}
    </SafeAreaView>
  );
}
