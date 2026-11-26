export const LightTheme = {
  dark: false,
  colors: {
    primary: "#007AFF",
    background: "#FFFFFF",
    card: "#F8F9FA",
    text: "#1C1C1E",
    border: "#C7C7CC",
    notification: "#FF3B30",
    subtext: "#6C757D",
  },
};

export const DarkTheme = {
  dark: true,
  colors: {
    primary: "#0A84FF",
    background: "#000000",
    card: "#1C1C1E",
    text: "#FFFFFF",
    border: "#38383A",
    notification: "#FF453A",
    subtext: "#98989F",
  },
};

export type AppTheme = typeof LightTheme;
