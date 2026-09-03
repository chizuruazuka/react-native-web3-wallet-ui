export type ThemeMode = "dark" | "light";

export const tokens = {
  spacing: {
    xs: 6,
    sm: 10,
    md: 16,
    lg: 22,
    xl: 30,
  },
  radius: {
    sm: 10,
    md: 16,
    lg: 24,
    pill: 999,
  },
  typography: {
    display: 32,
    title: 22,
    body: 16,
    label: 13,
    micro: 11,
  },
};

export const themes = {
  dark: {
    background: "#0C1118",
    surface: "#141B24",
    surfaceAlt: "#1A2430",
    text: "#F5F8FB",
    textMuted: "#96A3B3",
    border: "#233141",
    brand: "#4D8DFF",
    brandSoft: "#172C52",
    positive: "#43D19E",
    negative: "#FF6B7A",
    warning: "#FFC85A",
  },
  light: {
    background: "#F4F7FB",
    surface: "#FFFFFF",
    surfaceAlt: "#EDF2F8",
    text: "#122033",
    textMuted: "#68778A",
    border: "#DCE4EE",
    brand: "#2E6CE6",
    brandSoft: "#E9F0FF",
    positive: "#14966F",
    negative: "#D84C5D",
    warning: "#B77A00",
  },
};
