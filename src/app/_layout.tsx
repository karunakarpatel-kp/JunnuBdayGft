import { View } from "react-native";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";

import centralStore from "../../Store/CentralStore";
import "../../global.css";

const RootLayoutNav = () => {
  return (
    <SafeAreaProvider>
      <Provider store={centralStore}>
        <View className="flex-1">
          <StatusBar />
          <Stack>
            <Stack.Screen name="(Tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="login" options={{ headerShown: false }} />
          </Stack>
        </View>
      </Provider>
    </SafeAreaProvider>
  );
};

export default function RootLayout() {
  return <RootLayoutNav />;
}
