export type ThemeMode = "light" | "dark" | "system";

export const LightTheme = {
  dark: false,
  colors: {
    primary: "#007AFF",
    background: "#FFFFFF",
    card: "#F2F2F7",
    text: "#000000",
    secondaryText: "#3A3A3A",
    border: "#C7C7CC",
    notification: "#FF3B30",
    subtext: "#8E8E93",
  },
};

export const DarkTheme = {
  dark: true,
  colors: {
    primary: "#0A84FF",
    background: "#000000",
    card: "#1C1C1E",
    text: "#FFFFFF",
    secondaryText: "#EBEBF5",
    border: "#38383A",
    notification: "#FF453A",
    subtext: "#98989D",
  },
};

export type AppTheme = typeof LightTheme;
